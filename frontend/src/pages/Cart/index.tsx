import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";

import routes from "../../constants/routes";
import api from "../../services/api";

import "./styles.css";

import { LinkButton } from "../../components/Button";
import Input from "../../components/Input";
import CartItemList from "../../components/CartItemList";

type Product = {
  id: string;
  id_item: string;
  name: string;
  rating: number;
  price: number;
  photo: string;
};

export default function Cart() {
  const [cart, setCart] = useState<Product[]>([]);
  const [coupon, setCoupon] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);
  const { signed, user } = useAuth();

  function handleClick(productId: string) {
    if (signed) {
      api
        .delete("cart/remove", {
          headers: {
            Authorization: `Bearer ${user?.token}`,
            username: user?.username
          },
          data: {
            productId
          }
        })
        .then(() => {
          setCart(cart => cart.filter(product => productId !== product.id));
        });
    }
  }

  useEffect(() => {
    api
      .get("/cart", {
        headers: {
          Authorization: `Bearer ${user?.token}`,
          username: user?.username
        }
      })
      .then(response => {
        setCart(response.data);
      });
  }, [user]);

  const getTotal = useCallback(() => {
    let total = 0;

    cart.forEach(product => (total += product.price));

    return total;
  }, [cart]);

  function handleChange(ev: ChangeEvent<HTMLInputElement>) {
    setCoupon(ev.target.value);
  }

  useEffect(() => {
    if (coupon === "CARNAVAL30") {
      if (getTotal() !== 0) {
        setDiscount(getTotal() * 0.3);
      }
    } else {
      setDiscount(0);
    }
  }, [coupon, getTotal]);

  return (
    <div id="cart-page">
      <div className="cart-wrapper">
        <div className="cart-list-wrapper">
          <span className="cart-list-title">Carrinho ({cart.length})</span>
          <hr />
          <div className="cart-list">
            {cart.map(product => (
              <CartItemList
                key={product.id}
                product={product}
                handleClick={id => handleClick(id)}
              />
            ))}
          </div>
        </div>
        <div className="cart-price-wrapper">
          <div className="cart-price-container">
            <div className="cart-price-item">
              Produtos
              <span className="cart-price-item-value">
                R${getTotal().toFixed(2)}
              </span>
            </div>
            <div className="cart-price-item">
              Cupom
              <span className="cart-price-item-coupon">
                -R${discount.toFixed(2)}
              </span>
            </div>

            <div
              className="cart-price-item"
              style={{
                marginTop: 32
              }}
            >
              Total
              <span className="cart-price-item-value">
                R${(getTotal() - discount).toFixed(2)}
              </span>
            </div>
            <LinkButton href={routes.PAYMENT} className="cart-price-button">
              Prosseguir
            </LinkButton>
          </div>
          <Input
            value={coupon}
            onChange={ev => handleChange(ev)}
            className="cart-input"
            placeholder="Insira um cupom"
          />
        </div>
      </div>
    </div>
  );
}
