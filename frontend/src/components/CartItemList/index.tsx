import { Link } from "react-router-dom";

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
  handleClick(productId: string): void;
};

export default function CartItemList({ product, handleClick }: Props) {
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
        onClick={() => handleClick(product.id)}
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        >
          <path
            d="M48,47.223,5.85,5.073,4.223,3.447,2.682,1.905,0,4.587l9.271,9.271L13.938,23.7l-2.851,5.174a4.083,4.083,0,0,0-.528,2.027,4.236,4.236,0,0,0,4.223,4.223H30.536l2.914,2.914a4.211,4.211,0,1,0,5.871,5.871l6,6L48,47.223ZM15.669,30.9a.523.523,0,0,1-.528-.528l.063-.253,1.9-3.442h4.984L26.312,30.9Zm17.168-4.223a4.2,4.2,0,0,0,3.7-2.175L44.093,10.8a2.063,2.063,0,0,0,.253-1.014A2.118,2.118,0,0,0,42.235,7.67H13.811ZM14.782,37.235a4.223,4.223,0,1,0,4.223,4.223A4.218,4.218,0,0,0,14.782,37.235Z"
            transform="translate(0 -1.905)"
            fill="#fff"
          />
        </svg>
      </Button>
    </div>
  );
}
