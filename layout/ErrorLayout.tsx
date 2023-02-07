import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import exchangeRate from "../store/exchangeRate";
import { styledError } from "../styles/styles";
import { toast } from "react-hot-toast";
import { observer } from "mobx-react-lite";

interface PropsType {
  children: React.ReactNode;
}

const ErrorLayout = observer(({ children }: PropsType) => {
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
});

export default ErrorLayout;
