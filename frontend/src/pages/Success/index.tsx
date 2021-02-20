import { LinkButton } from "../../components/Button";
import routes from "../../constants/routes";
import "./styles.css";

export default function Success() {
  return (
    <div id="success-page">
      <div className="success-wrapper">
        <h1>Pagamento realizado com sucesso!</h1>
        <div className="success-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="159.653"
            height="119.055"
            viewBox="0 0 159.653 119.055"
          >
            <path
              d="M54.225,121.294,2.338,69.407a7.983,7.983,0,0,1,0-11.289L13.627,46.829a7.982,7.982,0,0,1,11.289,0L59.87,81.782,134.737,6.915a7.983,7.983,0,0,1,11.289,0L157.315,18.2a7.983,7.983,0,0,1,0,11.289l-91.8,91.8A7.983,7.983,0,0,1,54.225,121.294Z"
              transform="translate(0 -4.577)"
              fill="#fff"
            />
          </svg>
        </div>

        <LinkButton href={routes.PRODUCTS} className="success-button">
          Voltar para loja
        </LinkButton>
      </div>
    </div>
  );
}
