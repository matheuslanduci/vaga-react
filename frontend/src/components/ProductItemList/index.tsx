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

export default function ProductItemList({ product }: Props) {
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
    <div className="product-item-list-wrapper">
      <img
        src={product.photo}
        alt={product.name}
        className="product-item-list-image"
      />
      <div className="product-item-list-column">
        <Link
          to={`/product/${product.id}`}
          className="product-item-list-name"
          title={product.name}
        >
          {product.name}
        </Link>
        <span className="product-item-list-price">
          R${product.price.toFixed(2)}
        </span>
        <span className="product-item-list-installments">
          em{" "}
          <span className="price">
            12x de R${(product.price / 12).toFixed(2)}
          </span>
        </span>
      </div>
      <span className="product-item-list-rating">
        {product.rating === 0 ? (
          <span style={{ fontSize: 14 }}>Sem avaliações ainda!</span>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37.613"
              height="36"
              viewBox="0 0 37.613 36"
            >
              <path
                d="M18.23,1.251,13.639,10.56l-10.271,1.5A2.251,2.251,0,0,0,2.123,15.9l7.431,7.241L7.8,33.366a2.248,2.248,0,0,0,3.262,2.369l9.189-4.83,9.189,4.83A2.25,2.25,0,0,0,32.7,33.366L30.941,23.137,38.372,15.9a2.251,2.251,0,0,0-1.244-3.839l-10.271-1.5L22.265,1.251A2.252,2.252,0,0,0,18.23,1.251Z"
                transform="translate(-1.441 0.001)"
              />
            </svg>

            {product.rating.toFixed(1)}
          </>
        )}
      </span>
      <Button
        className="product-item-list-button"
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
