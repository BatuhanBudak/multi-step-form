import { yupResolver } from "@hookform/resolvers/yup";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCheckout } from "../../context/CheckoutFormContext";
import { IFormManagerProps } from "../FormManager/IFormManagerProps";
import { ThirdPageSchema } from "./FormThirdStepResolver";
import { IFormThirdStep } from "./IFormThirdStep";
import Button from "@mui/material/Button";

const FormThirdStep: FC<IFormManagerProps> = ({ setActiveStep }) => {
  const formContext = useCheckout();
  const { register, handleSubmit } = useForm({
    defaultValues: formContext.state.thirdForm,
    resolver: yupResolver(ThirdPageSchema),
  });

  const onSubmit: SubmitHandler<IFormThirdStep> = (data) => {
    formContext.dispatch({ type: "updateThirdForm", payload: data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Final Thoughts:
        <input type="text" {...register("finalThoughts")} />
      </label>
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={() => setActiveStep(1)}
      >
        Previous
      </Button>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default FormThirdStep;
