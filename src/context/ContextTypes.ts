import { IFormFirstStep } from "../components/FormFirstStep/IFormFirstStep";
import { IFormSecondStep } from "../components/FormSecondStep/IFormSecondStep";
import { IFormThirdStep } from "../components/formThirdStep/IFormThirdStep";

export type State = {
  firstForm: IFormFirstStep;
  secondForm: IFormSecondStep;
  thirdForm: IFormThirdStep;
};

export type Action =
  | { type: "updateFirstForm"; payload: IFormFirstStep }
  | { type: "updateSecondForm"; payload: IFormSecondStep }
  | { type: "updateThirdForm"; payload: IFormThirdStep };

export type FormProviderProps = { children: React.ReactNode };
