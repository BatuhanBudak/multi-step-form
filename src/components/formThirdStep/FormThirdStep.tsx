import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCheckout } from "../../context/CheckoutFormContext";
import { IFormManagerProps } from "../FormManager/IFormManagerProps";
import { IFormThirdStep } from "./IFormThirdStep";

const FormThirdStep: FC<IFormManagerProps> = ({ setActiveStep }) => {
  const formContext = useCheckout();
  const { register, handleSubmit } = useForm({
    defaultValues: formContext.state.thirdForm,
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
      <button type="button" onClick={() => setActiveStep(1)}>
        Previous
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormThirdStep;
