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

    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};
export default formReducer;
