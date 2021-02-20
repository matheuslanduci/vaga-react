import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";
import { useCookies } from "react-cookie";

import api from "../services/api";

type User = {
  username: string;
  token: string;
};

type AuthContextData = {
  signed: boolean;
  user: User | null;
  Authenticate(username: string, password: string): Promise<void>;
  Register(username: string, password: string, photo: string): Promise<void>;
  Logout(): void;
};

type AuthResponse = {
  data: {
    username?: string;
    token?: string;
    error?: string;
  };
};

type Props = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export function useAuth() {
  return useContext<AuthContextData>(AuthContext);
}

export function AuthProvider({ children }: Props) {
  const [cookies, setCookies, removeCookie] = useCookies();
  const [signed, setSigned] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  async function Authenticate(username: string, password: string) {
    await api
      .post("signin", { username, password })
      .then((response: AuthResponse) => {
        if (!response.data.error) {
          const username = response.data.username!;
          const token = response.data.token!;
          setUser({ username, token });
          setSigned(true);
          setCookies("APP_USER_DATA", { username, token });
        } else {
          const error = { response };
          throw error;
        }
      });
  }

  async function Register(username: string, password: string, photo: string) {
    await api
      .post("signup", { username, password, photo })
      .then((response: AuthResponse) => {
        if (!response.data.error) {
          const username = response.data.username!;
          const token = response.data.token!;
          setUser({ username, token });
          setSigned(true);
          setCookies("APP_USER_DATA", { username, token });
        } else {
          const error = { response };
          throw error;
        }
      });
  }

  function Logout() {
    setUser(null);
    setSigned(false);
    removeCookie("APP_USER_DATA");
  }

  useEffect(() => {
    if (!signed) {
      if (cookies.APP_USER_DATA) {
        setUser({
          username: cookies.APP_USER_DATA.username,
          token: cookies.APP_USER_DATA.token
        });
        setSigned(true);
      }
    }
  }, [cookies, signed]);

  return (
    <AuthContext.Provider
      value={{ signed, user, Authenticate, Register, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
