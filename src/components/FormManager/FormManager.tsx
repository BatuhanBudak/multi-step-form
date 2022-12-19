import { useState } from "react";
import FormFirstStep from "../FormFirstStep/FormFirstStep";
import FormSecondStep from "../FormSecondStep/FormSecondStep";
import FormThirdStep from "../formThirdStep/FormThirdStep";

const FormManager = () => {
  const [step, setActiveStep] = useState(0);

  return (
    <main>
      {step === 0 && <FormFirstStep setActiveStep={setActiveStep} />}
      {step === 1 && <FormSecondStep setActiveStep={setActiveStep} />}
      {step === 2 && <FormThirdStep setActiveStep={setActiveStep} />}
    </main>
  );
};

export default FormManager;
