import { CookiesProvider } from "react-cookie";
import { AuthProvider } from "./contexts/auth";
import { ErrorProvider } from "./contexts/error";
import Routes from "./routes";

export default function App() {
  return (
    <CookiesProvider>
      <ErrorProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ErrorProvider>
    </CookiesProvider>
  );
}
