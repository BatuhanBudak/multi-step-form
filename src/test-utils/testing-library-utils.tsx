import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { CheckoutFormProvider } from "../context/CheckoutFormContext";

const renderWithContext = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: CheckoutFormProvider, ...options });

export * from "@testing-library/react";

export { renderWithContext as render };
