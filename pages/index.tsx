import { Inter } from "@next/font/google";
import { CheckoutFormProvider } from "../src/context/CheckoutFormContext";
import FormManager from "../src/components/FormManager/FormManager";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <CheckoutFormProvider>
        <FormManager />
      </CheckoutFormProvider>
    </>
  );
}
