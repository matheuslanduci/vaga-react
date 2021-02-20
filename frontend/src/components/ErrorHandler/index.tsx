import { useEffect } from "react";
import { useError } from "../../contexts/error";

import "./styles.css";

type Props = {
  message: string;
};

export default function ErrorHandler({ message }: Props) {
  const { error, setError } = useError();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  }, [error, setError]);

  return (
    <div className={error ? "error-handler active" : "error-handler"}>
      {message}
    </div>
  );
}
