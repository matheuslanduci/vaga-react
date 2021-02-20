import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from "react";

type ErrorContextData = {
  error: boolean;
  setError: Dispatch<SetStateAction<boolean>>;
};

type Props = {
  children: ReactNode;
};

export const ErrorContext = createContext<ErrorContextData>(
  {} as ErrorContextData
);

export function useError() {
  return useContext(ErrorContext);
}

export function ErrorProvider({ children }: Props) {
  const [error, setError] = useState<boolean>(false);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
}

export default ErrorContext;
