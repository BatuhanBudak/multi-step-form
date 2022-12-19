import { FC } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useCheckout } from "../../context/CheckoutFormContext";
import { IFormManagerProps } from "../FormManager/IFormManagerProps";
import { IFormFirstStep } from "./IFormFirstStep";
import { FirstPageSchema } from "./FormFirstStepResolver";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import { Box, TextField } from "@mui/material";

const FormFirstStep: FC<IFormManagerProps> = ({ setActiveStep }) => {
  const formContext = useCheckout();

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<IFormFirstStep>({
    defaultValues: formContext.state.firstForm,
    resolver: yupResolver(FirstPageSchema),
  });

  const moreDetail = watch("moreDetail");

  const onSubmit: SubmitHandler<IFormFirstStep> = (data) => {
    console.log("data", data);
    formContext.dispatch({ type: "updateFirstForm", payload: data });
    setActiveStep(1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="First Name"
              variant="outlined"
              fullWidth
              margin="dense"
              error={!!errors.firstName}
              helperText={errors.firstName?.message ?? ""}
            />
          )}
        />
        {errors.firstName && <span>{errors.firstName.message}</span>}
      </Box>
      <label>
        Last Name:
        <input {...register("lastName")} />
      </label>
      <label>
        Email:
        <input type="email" {...register("email")} />
      </label>
      <label>
        Age:
        <input type="number" {...register("age", { valueAsNumber: true })} />
      </label>
      {errors.age && <span>{errors.age.message}</span>}
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
          {errors.interests && <span>{errors.interests.message}</span>}
        </div>
      )}
      <Button variant="contained" color="primary" type="submit">
        Next
      </Button>
    </form>
  );
};

export default FormFirstStep;
