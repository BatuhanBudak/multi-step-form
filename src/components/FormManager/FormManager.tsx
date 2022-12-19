import { useState } from "react";
import FormFirstStep from "../FormFirstStep/FormFirstStep";
import FormSecondStep from "../FormSecondStep/FormSecondStep";

const FormManager = () => {
  const [step, setActiveStep] = useState(1);

  return (
    <main>
      <FormFirstStep setActiveStep={setActiveStep} />
      <FormSecondStep setActiveStep={setActiveStep} />
    </main>
  );
};

export default FormManager;
