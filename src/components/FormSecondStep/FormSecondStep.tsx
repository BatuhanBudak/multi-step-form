import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCheckout } from "../../context/CheckoutFormContext";
import { IFormManagerProps } from "../FormManager/IFormManagerProps";
import { SecondPageSchema } from "./FormSecondStepResolver";
import { IFormSecondStep } from "./IFormSecondStep";

const FormSecondStep: FC<IFormManagerProps> = ({ setActiveStep }) => {
  const formContext = useCheckout();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<IFormSecondStep>({
    defaultValues: formContext.state.secondForm,
    resolver: yupResolver(SecondPageSchema),
  });

  const onSubmit: SubmitHandler<IFormSecondStep> = (data) => {
    console.log("data", data);
    console.log("errors", errors);
    formContext.dispatch({ type: "updateSecondForm", payload: data });
    setActiveStep(2);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Phone Number:
        <input type="tel" {...register("phoneNumber")} />
      </label>
      {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
      <label>
        Address:
        <input {...register("address")} />
      </label>
      {errors.address && <span>{errors.address.message}</span>}
      <label>
        Address2:
        <input {...register("address2")} />
      </label>
      {errors.address2 && <span>{errors.address2.message}</span>}
      <label>
        City:
        <input {...register("city")} />
      </label>
      {errors.city && <span>{errors.city.message}</span>}
      <label>
        State:
        <input {...register("state")} />
      </label>
      {errors.state && <span>{errors.state.message}</span>}
      <label>
        Zip:
        <input {...register("zip")} />
      </label>
      {errors.zip && <span>{errors.zip.message}</span>}

      <button type="button" onClick={() => setActiveStep(0)}>
        Previous
      </button>
      <button type="submit">Next</button>
    </form>
  );
};

export default FormSecondStep;
