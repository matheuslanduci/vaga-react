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
  confirmPassword: string;
  photo: string;
};

export default function Register() {
  const [values, setValues] = useState<FormValues>({
    username: "",
    password: "",
    confirmPassword: "",
    photo: ""
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { Register } = useAuth();
  const { setError } = useError();
  const history = useHistory();

  function handleChange(ev: ChangeEvent<HTMLInputElement>, prop: string) {
    setValues({ ...values, [prop]: ev.target.value });
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();

    if (values.password.length === 0 || values.username.length === 0) {
      setError(true);
      setErrorMessage("Complete todos os campos.");
      return;
    }

    if (values.password !== values.confirmPassword) {
      setError(true);
      setErrorMessage("As senhas não combinam.");
      return;
    }

    Register(values.username, values.password, values.photo)
      .then(() => {
        history.push(routes.PROFILE);
      })
      .catch(err => {
        setError(true);
        setErrorMessage(err.response.data.error);
      });
  }

  function handleChangePhoto(ev: ChangeEvent<HTMLInputElement>) {
    const photo = ev.target.files?.item(0)!;

    if (photo) {
      const reader = new FileReader();
      const element = document.querySelector<HTMLImageElement>(
        ".register-photo img"
      )!;

      reader.addEventListener("loadend", () => {
        element.src = reader.result as string;
        setValues({ ...values, photo: reader.result as string });
      });

      reader.readAsDataURL(photo);
    }
  }

  function handleClick() {
    document.querySelector<HTMLInputElement>("#upload-photo")!.click();
  }

  return (
    <div id="register-page">
      <ErrorHandler message={errorMessage} />
      <div className="register-content">
        <div className="register-form-wrapper">
          <span className="register-title">Registrar</span>
          <form className="register-form" onSubmit={handleSubmit}>
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
              placeholder="Confirmar senha"
              value={values.confirmPassword}
              onChange={ev => handleChange(ev, "confirmPassword")}
              type="password"
              className="input-group"
            />
            <input
              id="upload-photo"
              type="file"
              style={{ display: "none" }}
              onChange={handleChangePhoto}
            />
            <Button
              className="input-button"
              type="button"
              onClick={handleClick}
            >
              Enviar foto
            </Button>
            <Button className="input-group" type="submit">
              Registrar
            </Button>
          </form>
          <span className="register-redirect">
            Já possui uma conta?{" "}
            <Link to={routes.LOGIN}>Fazer login agora!</Link>
          </span>
        </div>
        <div className="register-photo">
          <img src={values.photo} alt="" />
          {values.photo ? "" : <span>Não foi enviado nenhuma imagem</span>}
        </div>
      </div>
    </div>
  );
}
