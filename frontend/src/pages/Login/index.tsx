import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { useError } from "../../contexts/error";

import routes from "../../constants/routes";

import "./styles.css";

import Button from "../../components/Button";
import Input from "../../components/Input";
import ErrorHandler from "../../components/ErrorHandler";

type FormValues = {
  username: string;
  password: string;
};

export default function Login() {
  const [values, setValues] = useState<FormValues>({
    username: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { Authenticate } = useAuth();
  const { setError } = useError();
  const history = useHistory();

  function handleChange(ev: ChangeEvent<HTMLInputElement>, prop: string) {
    setValues({ ...values, [prop]: ev.target.value });
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();

    Authenticate(values.username, values.password)
      .then(() => {
        history.push(routes.PROFILE);
      })
      .catch(err => {
        setError(true);
        setErrorMessage(err.response.data.error);
      });
  }

  return (
    <div id="login-page">
      <ErrorHandler message={errorMessage} />
      <main className="login-content">
        <div className="login-form-wrapper">
          <span className="login-title">Login</span>
          <form className="login-form" onSubmit={handleSubmit}>
            <Input
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                >
                  <path d="M7,8A4,4,0,1,0,3,4,4,4,0,0,0,7,8ZM9.8,9H9.278A5.44,5.44,0,0,1,4.722,9H4.2A4.2,4.2,0,0,0,0,13.2v1.3A1.5,1.5,0,0,0,1.5,16h11A1.5,1.5,0,0,0,14,14.5V13.2A4.2,4.2,0,0,0,9.8,9Z" />
                </svg>
              }
              placeholder="Nome de usuário"
              value={values.username}
              onChange={ev => handleChange(ev, "username")}
              className="input-group"
            />
            <Input
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                >
                  <path d="M12.5,7h-.75V4.75a4.75,4.75,0,0,0-9.5,0V7H1.5A1.5,1.5,0,0,0,0,8.5v6A1.5,1.5,0,0,0,1.5,16h11A1.5,1.5,0,0,0,14,14.5v-6A1.5,1.5,0,0,0,12.5,7ZM9.25,7H4.75V4.75a2.25,2.25,0,1,1,4.5,0Z" />
                </svg>
              }
              placeholder="Senha"
              value={values.password}
              onChange={ev => handleChange(ev, "password")}
              type="password"
              className="input-group"
            />
            <Button className="input-group" type="submit">
              Entrar
            </Button>
          </form>
          <span className="login-redirect">
            Não possui uma conta?{" "}
            <Link to={routes.REGISTER}>Criar uma agora!</Link>
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="333.452"
          height="232"
          viewBox="0 0 333.452 232"
          className="login-asset"
        >
          <ellipse
            id="Elipse_7"
            data-name="Elipse 7"
            cx="66.438"
            cy="5.046"
            rx="66.438"
            ry="5.046"
            transform="translate(0 221.908)"
            fill="#e6e6e6"
          />
          <path
            id="Caminho_28"
            data-name="Caminho 28"
            d="M324.272,247.808c11.562-4.918,25.963-1.8,40.027.361.131-2.619,1.717-5.806.056-7.633-2.019-2.22-1.833-4.552-.618-6.9,3.107-6-1.344-12.381-5.838-17.688a9.953,9.953,0,0,0-8.307-3.487l-8.325.595a9.97,9.97,0,0,0-8.852,7.126h0c-1.988,2.7-3.052,5.4-2.382,8.081-2.977,2.035-3.478,4.491-2.14,7.26a4.173,4.173,0,0,1-.052,5.09,23.5,23.5,0,0,0-3.494,6.941Z"
            transform="translate(-273.488 -196.331)"
            fill="#2f2e41"
          />
          <path
            id="Caminho_29"
            data-name="Caminho 29"
            d="M642.054,629.946H406.4a7.9,7.9,0,0,1-7.9-7.9h0q128.136-14.892,251.455,0h0A7.9,7.9,0,0,1,642.054,629.946Z"
            transform="translate(-316.504 -429.386)"
            fill="#2f2e41"
          />
          <path
            id="Caminho_30"
            data-name="Caminho 30"
            d="M649.955,402.168,398.5,401.7l29.143-49.036.139-.232V244.365a9.988,9.988,0,0,1,9.989-9.988H609.29a9.988,9.988,0,0,1,9.989,9.989V353.179Z"
            transform="translate(-316.504 -209.045)"
            fill="#3f3d56"
          />
          <path
            id="Caminho_31"
            data-name="Caminho 31"
            d="M486.866,250.957a3.257,3.257,0,0,0-3.254,3.254v98.537A3.257,3.257,0,0,0,486.866,356h173.37a3.258,3.258,0,0,0,3.254-3.254V254.21a3.257,3.257,0,0,0-3.254-3.254Z"
            transform="translate(-365.827 -218.653)"
            fill="#fff"
          />
          <path
            id="Caminho_32"
            data-name="Caminho 32"
            d="M478.781,531.718a1.4,1.4,0,0,0-1.267.812l-8.98,19.521a1.394,1.394,0,0,0,1.267,1.977H658.641a1.394,1.394,0,0,0,1.247-2.018l-9.761-19.521a1.387,1.387,0,0,0-1.247-.771Z"
            transform="translate(-357.015 -381.356)"
            fill="#2f2e41"
          />
          <circle
            id="Elipse_8"
            data-name="Elipse 8"
            cx="2.092"
            cy="2.092"
            r="2.092"
            transform="translate(204.935 26.493)"
            fill="#fff"
          />
          <path
            id="Caminho_33"
            data-name="Caminho 33"
            d="M646.674,593.619a1.4,1.4,0,0,0-1.346,1.032l-2.253,8.366a1.394,1.394,0,0,0,1.346,1.757h42.837a1.394,1.394,0,0,0,1.317-1.851l-2.9-8.366a1.4,1.4,0,0,0-1.318-.938Z"
            transform="translate(-458.209 -417.228)"
            fill="#2f2e41"
          />
          <path
            id="Caminho_34"
            data-name="Caminho 34"
            d="M455.942,337.135v1.859H264.306l.144-.232v-1.627Z"
            transform="translate(-153.167 -195.372)"
            fill="#2f2e41"
          />
          <circle
            id="Elipse_9"
            data-name="Elipse 9"
            cx="32.536"
            cy="32.536"
            r="32.536"
            transform="translate(264.894 0)"
          />
          <path
            id="Caminho_35"
            data-name="Caminho 35"
            d="M903.175,257.679H876.217a1.861,1.861,0,0,1-1.859-1.859V239.552a1.861,1.861,0,0,1,1.859-1.859h26.958a1.861,1.861,0,0,1,1.859,1.859V255.82A1.861,1.861,0,0,1,903.175,257.679Zm-26.958-18.127V255.82h26.96V239.552Z"
            transform="translate(-592.266 -210.967)"
            fill="#fff"
          />
          <path
            id="Caminho_36"
            data-name="Caminho 36"
            d="M907.671,219.054H890.938v-7.437c0-5.386,3.519-9.3,8.366-9.3s8.366,3.909,8.366,9.3ZM892.8,217.194h13.014v-5.578c0-4.379-2.676-7.437-6.507-7.437s-6.507,3.058-6.507,7.437Z"
            transform="translate(-601.874 -190.469)"
            fill="#fff"
          />
          <circle
            id="Elipse_10"
            data-name="Elipse 10"
            cx="1.859"
            cy="1.859"
            r="1.859"
            transform="translate(295.571 34.395)"
            fill="#fff"
          />
          <path
            id="Caminho_37"
            data-name="Caminho 37"
            d="M668.747,368.64H534.76a2.484,2.484,0,0,1-2.481-2.481V332.923a2.484,2.484,0,0,1,2.481-2.481H668.747a2.484,2.484,0,0,1,2.481,2.481v33.236A2.484,2.484,0,0,1,668.747,368.64ZM534.76,331.434a1.49,1.49,0,0,0-1.489,1.489v33.236a1.49,1.49,0,0,0,1.489,1.489H668.747a1.49,1.49,0,0,0,1.489-1.489V332.923a1.49,1.49,0,0,0-1.489-1.489Z"
            transform="translate(-394.03 -264.715)"
            fill="#e6e6e6"
          />
          <circle
            id="Elipse_11"
            data-name="Elipse 11"
            cx="10.107"
            cy="10.107"
            r="10.107"
            transform="translate(151.442 73.443)"
            fill="#e6e6e6"
          />
          <path
            id="Caminho_38"
            data-name="Caminho 38"
            d="M640.881,356.8a1.685,1.685,0,1,0,0,3.369H720.3a1.685,1.685,0,0,0,0-3.369Z"
            transform="translate(-455.989 -279.993)"
            fill="#e6e6e6"
          />
          <path
            id="Caminho_39"
            data-name="Caminho 39"
            d="M640.881,380.842a1.685,1.685,0,1,0,0,3.369h34.172a1.685,1.685,0,0,0,0-3.369Z"
            transform="translate(-455.989 -293.923)"
            fill="#e6e6e6"
          />
          <path
            id="Caminho_40"
            data-name="Caminho 40"
            d="M432.455,362.561l-24.768,13.168-.314-10.973a73.353,73.353,0,0,0,22.887-7.525l2.59-6.4a4.338,4.338,0,0,1,7.374-1.126h0a4.338,4.338,0,0,1-.382,5.916Z"
            transform="translate(-321.646 -274.96)"
            fill="#ffb8b8"
          />
          <path
            id="Caminho_41"
            data-name="Caminho 41"
            d="M322.862,540.382h0a4.867,4.867,0,0,1,.618-3.937l5.441-8.35a9.508,9.508,0,0,1,12.335-3.254h0c-2.287,3.892-1.968,7.307.79,10.274a49.463,49.463,0,0,0-11.747,8.008,4.867,4.867,0,0,1-7.437-2.741Z"
            transform="translate(-272.572 -376.754)"
            fill="#2f2e41"
          />
          <path
            id="Caminho_42"
            data-name="Caminho 42"
            d="M406.794,486.892h0a9.336,9.336,0,0,1-7.935,4.533l-36.146.274-1.568-9.092,15.99-4.7-13.482-10.346,14.736-17.244,26.764,24.946A9.336,9.336,0,0,1,406.794,486.892Z"
            transform="translate(-294.857 -334.181)"
            fill="#2f2e41"
          />
          <path
            id="Caminho_43"
            data-name="Caminho 43"
            d="M329.228,514.506h-8.465c-7.6-52.1-15.337-104.342,7.525-123.842l26.963,4.389L351.8,417.941l-15.049,17.244Z"
            transform="translate(-267.015 -299.615)"
            fill="#2f2e41"
          />
          <path
            id="Caminho_44"
            data-name="Caminho 44"
            d="M345.1,692.6h0a4.867,4.867,0,0,1-3.937-.618l-9.191-1.235a9.508,9.508,0,0,1-3.255-12.335h0c3.892,2.286,7.307,1.968,10.274-.79,2.1,4.233,5.551,3.975,8.85,7.542A4.867,4.867,0,0,1,345.1,692.6Z"
            transform="translate(-275.449 -465.91)"
            fill="#2f2e41"
          />
          <path
            id="Caminho_45"
            data-name="Caminho 45"
            d="M377.568,278.088l-15.676-3.762c2.6-5.329,2.818-11.259,1.568-17.557l10.66-.314A81.839,81.839,0,0,0,377.568,278.088Z"
            transform="translate(-295.289 -221.84)"
            fill="#ffb8b8"
          />
          <path
            id="Caminho_46"
            data-name="Caminho 46"
            d="M368.967,345.73c-11.412,7.776-19.475.266-25.628-11.321.855-7.09-.529-15.575-3.093-24.8a16.878,16.878,0,0,1,10.3-20.352h0l13.482,5.643c11.447,9.331,13.7,19.438,9.406,30.1Z"
            transform="translate(-282.38 -240.851)"
          />
          <path
            id="Caminho_47"
            data-name="Caminho 47"
            d="M292.55,308.827l-12.541,6.584,22.26,13.168,3.1,7.64a4.052,4.052,0,0,1-2.434,5.353h0a4.052,4.052,0,0,1-5.366-3.593l-.313-5.325-28.292-9.337a6.616,6.616,0,0,1-4.151-4.042h0a6.616,6.616,0,0,1,2.482-7.7l22.751-15.608Z"
            transform="translate(-238.802 -244.74)"
            fill="#ffb8b8"
          />
          <path
            id="Caminho_48"
            data-name="Caminho 48"
            d="M337.813,305.519c-5.23-2.292-9.986.2-15.99,2.195l-.941-16.617c5.961-3.177,11.644-4.034,16.93-1.568Z"
            transform="translate(-271.524 -240.178)"
          />
          <circle
            id="Elipse_12"
            data-name="Elipse 12"
            cx="10.009"
            cy="10.009"
            r="10.009"
            transform="translate(62.537 22.829)"
            fill="#ffb8b8"
          />
          <path
            id="Caminho_49"
            data-name="Caminho 49"
            d="M373.786,236.847c-9.909.971-17.46-.65-22.286-5.265v-3.716h21.445Z"
            transform="translate(-289.267 -205.272)"
            fill="#2f2e41"
          />
        </svg>
      </main>
    </div>
  );
}
