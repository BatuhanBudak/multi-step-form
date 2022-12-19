import { Box, Card, CardContent } from "@mui/material";
import { useState } from "react";
import FormFirstStep from "../FormFirstStep/FormFirstStep";
import FormSecondStep from "../FormSecondStep/FormSecondStep";
import FormThirdStep from "../formThirdStep/FormThirdStep";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useCheckout } from "../../context/CheckoutFormContext";

const FormManager = () => {
  // const [step, setActiveStep] = useState(0);
  const { state } = useCheckout();

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <FormFirstStep />;
      case 1:
        return <FormSecondStep />;
      case 2:
        return <FormThirdStep />;
      default:
        return "Unknown step";
    }
  }

  return (
    <Card>
      <CardContent>
        <Stepper activeStep={state.activeStep} alternativeLabel>
          <Step>
            <StepLabel>Personal Info</StepLabel>
          </Step>
          <Step>
            <StepLabel>Contact Info</StepLabel>
          </Step>
          <Step>
            <StepLabel>Thoughts</StepLabel>
          </Step>
        </Stepper>
        <Box>{getStepContent(state.activeStep)}</Box>
      </CardContent>
    </Card>
  );
};

export default FormManager;
