import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCheckout } from "../../context/CheckoutFormContext";
import { IFormManagerProps } from "../FormManager/IFormManagerProps";
import { IFormFirstStep } from "./IFormFirstStep";

const FormFirstStep: FC<IFormManagerProps> = ({ setActiveStep }) => {
  const formContext = useCheckout();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormFirstStep>({
    defaultValues: formContext.state.firstForm,
  });

  const moreDetail = watch("moreDetail");

  const onSubmit: SubmitHandler<IFormFirstStep> = (data) => {
    formContext.dispatch({ type: "updateFirstForm", payload: data });
    console.log("data", data);
    setActiveStep(1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        First Name:
        <input {...register("firstName")} />
      </label>
      <label>
        Last Name:
        <input {...register("lastName")} />
      </label>
      <label>
        Email:
        <input {...register("email")} />
      </label>
      <label>
        Phone Number:
        <input type="tel" {...register("phoneNumber")} />
      </label>
      {/* {errors.exampleRequired && <span>This field is required</span>} */}
      <label>
        Your gender:
        <select {...register("gender")}>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label>More Details</label>
      <input type="checkbox" {...register("moreDetail")} />
      {moreDetail && (
        <div>
          <label>Interests</label>
          <input type="text" {...register("interests")} />
        </div>
      )}
      <button type="submit">Next</button>
    </form>
  );
};

export default FormFirstStep;
