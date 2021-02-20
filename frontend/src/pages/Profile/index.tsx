import { ChangeEvent, FormEvent, useState } from "react";
import { useAuth } from "../../contexts/auth";
import { useError } from "../../contexts/error";

import api from "../../services/api";

import "./styles.css";

import Button from "../../components/Button";
import ErrorHandler from "../../components/ErrorHandler";

export default function Profile() {
  const { user } = useAuth();
  const [photo, setPhoto] = useState<string>(
    `http://localhost:3333/public/${user?.username}.png?key=${Date.now()}`
  );
  const { setError } = useError();
  const [errorMessage, setErrorMessage] = useState<string>("");

  function handleChangePhoto(ev: ChangeEvent<HTMLInputElement>) {
    const photo = ev.target.files?.item(0)!;

    if (photo) {
      const reader = new FileReader();

      reader.addEventListener("loadend", () => {
        setPhoto(reader.result as string);
      });

      reader.readAsDataURL(photo);
    }
  }

  function handleClick() {
    document.querySelector<HTMLInputElement>("#upload-photo")!.click();
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();

    api
      .put(
        "/profile",
        { photo },
        {
          headers: {
            username: user?.username,
            Authorization: `Bearer ${user?.token}`
          }
        }
      )
      .catch(() => {
        setError(true);
        setErrorMessage(
          "Imagem muito grande! Tente novamente com outra imagem."
        );
      });
  }

  return (
    <div id="profile-page">
      <ErrorHandler message={errorMessage} />
      <div className="profile-form-wrapper">
        <span className="profile-title">Editar perfil</span>
        <img src={photo} alt="Sua imagem" className="profile-img" />
        <form className="profile-form" onSubmit={handleSubmit}>
          <input
            id="upload-photo"
            type="file"
            style={{ display: "none" }}
            onChange={handleChangePhoto}
          />
          <Button className="upload" type="button" onClick={handleClick}>
            Enviar imagem
          </Button>
          <Button className="save" type="submit">
            Salvar
          </Button>
        </form>
      </div>
    </div>
  );
}
