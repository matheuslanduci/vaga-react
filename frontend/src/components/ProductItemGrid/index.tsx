import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

import api from "../../services/api";
import routes from "../../constants/routes";

import "./styles.css";

import Button from "../Button";

type Product = {
  id: string;
  name: string;
  rating: number;
  price: number;
  photo: string;
};

type Props = {
  product: Product;
};

export default function ProductItemGrid({ product }: Props) {
  const { user, signed } = useAuth();
  const history = useHistory();

  function handleClick() {
    if (signed) {
      api.post(
        "cart/add",
        { productId: product.id },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
            username: user?.username
          }
        }
      );
    } else {
      history.push(routes.LOGIN);
    }
  }

  return (
    <div className="product-item-grid-wrapper">
      <img
        src={product.photo}
        alt={product.name}
        className="product-item-grid-image"
      />
      <Link
        to={`/product/${product.id}`}
        className="product-item-grid-name"
        title={product.name}
      >
        {product.name}
      </Link>
      <span className="product-item-grid-price">
        R${product.price.toFixed(2)}
      </span>
      <span className="product-item-grid-installments">
        em{" "}
        <span className="price">
          12x de R${(product.price / 12).toFixed(2)}
        </span>
      </span>
      <span className="product-item-grid-rating">
        {product.rating === 0 ? (
          "Sem avaliações ainda!"
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22.986"
              height="22"
              viewBox="0 0 22.986 22"
            >
              <path
                d="M11.7.764,8.9,6.453l-6.277.915a1.376,1.376,0,0,0-.76,2.346L6.4,14.139,5.325,20.39a1.374,1.374,0,0,0,1.994,1.448l5.615-2.952,5.615,2.952a1.375,1.375,0,0,0,1.993-1.448l-1.074-6.251L24.01,9.714a1.376,1.376,0,0,0-.76-2.346l-6.277-.915L14.167.764A1.376,1.376,0,0,0,11.7.764Z"
                transform="translate(-1.441 0.001)"
              />
            </svg>
            {product.rating.toFixed(1)}
          </>
        )}
      </span>
      <Button
        className="product-item-grid-button"
        onClick={handleClick}
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="24"
          viewBox="0 0 27 24"
        >
          <path
            d="M23.659,15H9.917l.307,1.5H22.806a1.125,1.125,0,0,1,1.1,1.374l-.259,1.138a2.626,2.626,0,1,1-2.981.488H10.836a2.625,2.625,0,1,1-3.143-.4L4.4,3H1.125A1.125,1.125,0,0,1,0,1.875v-.75A1.125,1.125,0,0,1,1.125,0H5.931a1.125,1.125,0,0,1,1.1.9L7.463,3H25.875a1.125,1.125,0,0,1,1.1,1.374l-2.216,9.75A1.125,1.125,0,0,1,23.659,15ZM19.125,7.875h-2.25V6a.75.75,0,0,0-.75-.75h-.75a.75.75,0,0,0-.75.75V7.875h-2.25a.75.75,0,0,0-.75.75v.75a.75.75,0,0,0,.75.75h2.25V12a.75.75,0,0,0,.75.75h.75a.75.75,0,0,0,.75-.75V10.125h2.25a.75.75,0,0,0,.75-.75v-.75A.75.75,0,0,0,19.125,7.875Z"
            fill="#fff"
          />
        </svg>
      </Button>
    </div>
  );
}
