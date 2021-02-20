import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

import api from "../../services/api";
import routes from "../../constants/routes";

import "./styles.css";

import Button from "../../components/Button";
import Comment from "../../components/Comments";
import ProductItemGrid from "../../components/ProductItemGrid";
type TProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  photos: string[];
  label: string;
  comments: {
    name: string;
    photo: string;
    rating: number;
    comment: string;
  }[];
};

type OtherProduct = {
  id: string;
  name: string;
  rating: number;
  price: number;
  photo: string;
};

type Response = {
  data: {
    product: TProduct;
    otherProducts: OtherProduct[];
  };
};

export default function Product() {
  const [product, setProduct] = useState<TProduct>({
    id: "",
    name: "",
    description: "",
    price: 0,
    photos: [],
    label: "",
    comments: []
  });
  const [otherProducts, setOtherProducts] = useState<OtherProduct[]>([]);
  const [rating, setRating] = useState<number>(0);
  const [selectedPhoto, setSelectedPhoto] = useState<string>(product.photos[0]);
  const { id } = useParams<{ id: string }>();
  const { user, signed } = useAuth();
  const history = useHistory();

  useEffect(() => {
    api.get(`product/${id}`).then((response: Response) => {
      setProduct(response.data.product);
      setSelectedPhoto(response.data.product.photos[0]);
      setOtherProducts(response.data.otherProducts);

      let rating = 0;

      if (response.data.product.comments.length > 0) {
        response.data.product.comments.forEach(
          comment => (rating += comment.rating)
        );

        rating /= response.data.product.comments.length;
      }

      setRating(rating);
    });
  }, [id]);

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
    <div id="product-page">
      <main className="product-container-wrapper">
        <div className="product-container">
          <div className="product-images-column">
            <img src={selectedPhoto} alt="" className="product-main-image" />
            <div className="product-images-row">
              {product.photos.map(photo => (
                <img
                  src={photo}
                  className={
                    selectedPhoto === photo
                      ? "product-option-image active"
                      : "product-option-image"
                  }
                  alt=""
                  onClick={() => setSelectedPhoto(photo)}
                />
              ))}
            </div>
            <div className="product-rating">
              {rating === 0 ? (
                <span style={{ fontSize: 14, lineHeight: "20px" }}>
                  Não possui avaliações ainda!
                </span>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50.15"
                    height="48"
                    viewBox="0 0 50.15 48"
                  >
                    <path
                      id="Icon_awesome-star"
                      data-name="Icon awesome-star"
                      d="M23.826,1.669,17.705,14.08l-13.7,2a3,3,0,0,0-1.659,5.118l9.908,9.655L9.915,44.489a3,3,0,0,0,4.349,3.159l12.252-6.44,12.252,6.44a3,3,0,0,0,4.349-3.159L40.774,30.85l9.908-9.655a3,3,0,0,0-1.659-5.118l-13.7-2L29.207,1.669A3,3,0,0,0,23.826,1.669Z"
                      transform="translate(-1.441 0.001)"
                    />
                  </svg>
                  {rating.toFixed(1)}
                </>
              )}
            </div>
          </div>
          <div className="product-content">
            <span className="product-name" title={product.name}>
              {product.name}
            </span>
            <p className="product-description">{product.description}</p>
            <span className="product-price">R${product.price.toFixed(2)}</span>
            <span className="product-installments">
              em{" "}
              <span className="price">
                12x de R${(product.price / 12).toFixed(2)}
              </span>
            </span>
            <Button type="button" className="product-cart-button" onClick={handleClick}>
              Adicionar ao carrinho
            </Button>
          </div>
        </div>
        <div className="comment-list">
          {product.comments.map(comment => (
            <Comment key={comment.comment} comment={comment} />
          ))}
        </div>
      </main>
      <aside className="product-others-container">
        <span className="product-others-title">Outros produtos</span>
        <hr />
        <div className="product-others-list">
          {otherProducts.map(prod => (
            <ProductItemGrid key={prod.id} product={prod} />
          ))}
        </div>
      </aside>
    </div>
  );
}
