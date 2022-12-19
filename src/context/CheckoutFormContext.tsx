import { createContext, Dispatch, useContext, useReducer } from "react";

import { Action, FormProviderProps, State } from "./ContextTypes";
import formReducer from "./FormReducer";

const initialState: State = {
  firstForm: {
    firstName: "",
    lastName: "",
    age: 0,
    email: "",

    millionare: false,
    gender: "female",
    moreDetail: false,
    interests: "",
  },
  secondForm: {
    phoneNumber: 0,
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  },
  thirdForm: {
    finalThoughts: "",
  },
};

const CheckoutFormContext = createContext<
  { state: State; dispatch: Dispatch<Action> } | undefined
>(undefined);

const CheckoutFormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const value = { state, dispatch };
  return (
    <CheckoutFormContext.Provider value={value}>
      {children}
    </CheckoutFormContext.Provider>
  );
};

const useCheckout = () => {
  const context = useContext(CheckoutFormContext);
  if (context) {
    return context;
  }
  throw new Error("useCheckout must be used within a FormProvider");
};

export { CheckoutFormProvider, useCheckout };
