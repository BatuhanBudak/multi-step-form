import { IFormFirstStep } from "../components/FormFirstStep/IFormFirstStep";
import { IFormSecondStep } from "../components/FormSecondStep/IFormSecondStep";

export type State = {
  firstForm: IFormFirstStep;
  secondForm: IFormSecondStep;
};

export type Action =
  | { type: "updateFirstForm"; payload: IFormFirstStep }
  | { type: "updateSecondForm"; payload: IFormSecondStep };

export type FormProviderProps = { children: React.ReactNode };
