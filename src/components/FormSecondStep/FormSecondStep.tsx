import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCheckout } from "../../context/CheckoutFormContext";
import { IFormManagerProps } from "../FormManager/IFormManagerProps";
import { IFormSecondStep } from "./IFormSecondStep";

const FormSecondStep: FC<IFormManagerProps> = ({ setActiveStep }) => {
  const formContext = useCheckout();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<IFormSecondStep>({
    defaultValues: formContext.state.secondForm,
  });

  const onSubmit: SubmitHandler<IFormSecondStep> = (data) => {
    formContext.dispatch({ type: "updateSecondForm", payload: data });
    setActiveStep(3);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Address:
        <input {...register("address")} />
      </label>
      <label>
        Address2:
        <input {...register("address2")} />
      </label>
      <label>
        City:
        <input {...register("city")} />
      </label>
      <label>
        State:
        <input {...register("city")} />
      </label>
      <label>
        Zip::
        <input {...register("zip")} />
      </label>
      {/* {errors.exampleRequired && <span>This field is required</span>} */}

      <button type="submit">Next</button>
    </form>
  );
};

export default FormSecondStep;
