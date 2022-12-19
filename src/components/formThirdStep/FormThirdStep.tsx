import { yupResolver } from "@hookform/resolvers/yup";
import React, { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useCheckout } from "../../context/CheckoutFormContext";
import { IFormManagerProps } from "../FormManager/IFormManagerProps";
import { ThirdPageSchema } from "./FormThirdStepResolver";
import { IFormThirdStep } from "./IFormThirdStep";
import Button from "@mui/material/Button";
import { Box, CircularProgress, Grid, TextField } from "@mui/material";

const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time));

const FormThirdStep: FC = () => {
  const formContext = useCheckout();
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: formContext.state.thirdForm,
    resolver: yupResolver(ThirdPageSchema),
  });

  const onSubmit: SubmitHandler<IFormThirdStep> = async (data) => {
    formContext.dispatch({ type: "updateThirdForm", payload: data });
    await sleep(3000);
    formContext.dispatch({ type: "setStep", payload: 3 });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box paddingBottom={2}>
        <Controller
          name="finalThoughts"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Final Thoughts"
              variant="outlined"
              fullWidth
              margin="dense"
            />
          )}
        />
      </Box>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={() =>
              formContext.dispatch({ type: "setStep", payload: 1 })
            }
            disabled={isSubmitting}
          >
            Previous
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormThirdStep;
