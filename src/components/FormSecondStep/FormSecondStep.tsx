import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid, TextField } from "@mui/material";
import { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useCheckout } from "../../context/CheckoutFormContext";
import { IFormManagerProps } from "../FormManager/IFormManagerProps";
import { SecondPageSchema } from "./FormSecondStepResolver";
import { IFormSecondStep } from "./IFormSecondStep";

const FormSecondStep: FC = () => {
  const formContext = useCheckout();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormSecondStep>({
    defaultValues: formContext.state.secondForm,
    resolver: yupResolver(SecondPageSchema),
  });

  const onSubmit: SubmitHandler<IFormSecondStep> = (data) => {
    console.log("data", data);
    console.log("errors", errors);
    formContext.dispatch({ type: "updateSecondForm", payload: data });
    formContext.dispatch({ type: "setStep", payload: 2 });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box paddingBottom={2}>
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Phone number"
              type="tel"
              variant="outlined"
              fullWidth
              margin="dense"
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber?.message ?? ""}
            />
          )}
        />
      </Box>
      <Box paddingBottom={2}>
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Address"
              variant="outlined"
              fullWidth
              margin="dense"
              error={!!errors.address}
              helperText={errors.address?.message ?? ""}
            />
          )}
        />
      </Box>
      <Box paddingBottom={2}>
        <Controller
          name="address2"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Address2"
              variant="outlined"
              fullWidth
              margin="dense"
              error={!!errors.address2}
              helperText={errors.address2?.message ?? ""}
            />
          )}
        />
      </Box>
      <Box paddingBottom={2}>
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="City"
              variant="outlined"
              fullWidth
              margin="dense"
              error={!!errors.city}
              helperText={errors.city?.message ?? ""}
            />
          )}
        />
      </Box>
      <Box paddingBottom={2}>
        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="State"
              variant="outlined"
              fullWidth
              margin="dense"
              error={!!errors.state}
              helperText={errors.state?.message ?? ""}
            />
          )}
        />
      </Box>
      <Box paddingBottom={2}>
        <Controller
          name="zip"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Zip"
              variant="outlined"
              fullWidth
              margin="dense"
              error={!!errors.zip}
              helperText={errors.zip?.message ?? ""}
            />
          )}
        />
      </Box>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              formContext.dispatch({ type: "setStep", payload: 0 })
            }
          >
            Previous
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" type="submit">
            Next
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormSecondStep;
