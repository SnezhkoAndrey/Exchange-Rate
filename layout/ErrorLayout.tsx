import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import exchangeRate from "../store/exchangeRate";
import { styledError } from "../styles/styles";
import { toast } from "react-hot-toast";

interface PropsType {
  children: React.ReactNode;
}

const ErrorLayout = ({ children }: PropsType) => {
  const error = exchangeRate.exchangeRates.error;

  useEffect(() => {
    if (error) {
      toast.error(error, styledError);
    }
    exchangeRate.setError("");
  }, [error]);

  return (
    <>
      <div>{children}</div>
      <Toaster />
    </>
  );
};

export default ErrorLayout;
