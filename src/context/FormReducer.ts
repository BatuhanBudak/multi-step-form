import { Action, State } from "./ContextTypes";

export const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "updateFirstForm":
      return {
        ...state,
        firstForm: action.payload,
      };

    case "updateSecondForm":
      return {
        ...state,
        secondForm: action.payload,
      };

    case "updateThirdForm":
      return {
        ...state,
        thirdForm: action.payload,
      };
    case "setStep":
      return {
        ...state,
        activeStep: action.payload,
      };

    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};
export default formReducer;
