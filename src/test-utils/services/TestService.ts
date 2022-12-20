import { IFormFirstStep } from "../../components/FormFirstStep/IFormFirstStep";
import { IFormSecondStep } from "../../components/FormSecondStep/IFormSecondStep";
import { IFormThirdStep } from "../../components/formThirdStep/IFormThirdStep";

const testSubmit = async (
  data: IFormFirstStep | IFormSecondStep | IFormThirdStep
): Promise<void> => {
  console.log("data", data);
};

export const TestService = {
  testSubmit,
};
