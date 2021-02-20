import { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

import routes from "../../constants/routes";

import "./styles.css";

import { LinkButton } from "../Button";

export default function Header() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { user, signed, Logout } = useAuth();
  const history = useHistory();
  const location = useLocation();

  function handleLogout() {
    Logout();
    setIsActive(false);
    history.push(routes.HOME);
  }

  return (
    <header className="header">
      <Link to={routes.HOME} className="header-logo">
        <h1>eCommerce</h1>
        <h2>Sua loja preferida online!</h2>
      </Link>
      <nav className="header-nav">
        <Link
          to={routes.PRODUCTS}
          className={location.pathname === routes.PRODUCTS ? "active" : ""}
        >
          Produtos
        </Link>
        <Link
          to={routes.CART}
          className={location.pathname === routes.CART ? "active" : ""}
        >
          Carrinho
        </Link>
      </nav>
      {signed ? (
        <div className="header-user">
          <span>
            Bem-vindo, <span className="username">{user?.username}</span>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="5"
            viewBox="0 0 10 5"
            onClick={() => setIsActive(act => !act)}
            style={{
              transform: isActive ? "rotateZ(180deg)" : ""
            }}
          >
            <path d="M9,13.5l5,5,5-5Z" transform="translate(-9 -13.5)" />
          </svg>
          {isActive ? (
            <div className="header-dropdown">
              <div className="header-list">
                <Link to={routes.PROFILE} className="menu-item">
                  Editar perfil
                </Link>
                <span className="menu-item" onClick={handleLogout}>
                  Logout
                </span>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <nav className="header-nav-buttons">
          <LinkButton href={routes.LOGIN} className="login">
            Entrar
          </LinkButton>
          <LinkButton href={routes.REGISTER}>Registrar</LinkButton>
        </nav>
      )}
    </header>
  );
}
