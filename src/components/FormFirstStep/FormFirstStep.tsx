import { FC } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useCheckout } from "../../context/CheckoutFormContext";
import { IFormManagerProps } from "../FormManager/IFormManagerProps";
import { IFormFirstStep } from "./IFormFirstStep";
import { FirstPageSchema } from "./FormFirstStepResolver";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const FormFirstStep: FC = () => {
  const formContext = useCheckout();

  const {
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
    formContext.dispatch({ type: "setStep", payload: 1 });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box paddingBottom={2}>
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
      </Box>
      <Box paddingBottom={2}>
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="dense"
              error={!!errors.lastName}
              helperText={errors.lastName?.message ?? ""}
            />
          )}
        />
      </Box>
      <Box paddingBottom={2}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              fullWidth
              margin="dense"
              error={!!errors.email}
              helperText={errors.email?.message ?? ""}
            />
          )}
        />
      </Box>
      <Box paddingBottom={2}>
        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Age"
              variant="outlined"
              fullWidth
              margin="dense"
              error={!!errors.age}
              helperText={errors.age?.message ?? ""}
            />
          )}
        />
      </Box>
      <Box paddingBottom={2}>
        <FormControl fullWidth>
          <InputLabel htmlFor="gender">Gender</InputLabel>
          <Controller
            name="gender"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                value={value}
                onChange={onChange}
                label="Gender"
                labelId="gender"
                fullWidth
              >
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            )}
          />
        </FormControl>
      </Box>
      <Box paddingBottom={2}>
        <Controller
          control={control}
          name="moreDetail"
          defaultValue={false}
          render={({ field: { onChange, value } }) => (
            <FormControlLabel
              label="More details"
              control={<Checkbox checked={value} onChange={onChange} />}
            />
          )}
        />
      </Box>
      {moreDetail && (
        <Box paddingBottom={2}>
          <Controller
            name="interests"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Interests"
                variant="outlined"
                fullWidth
                margin="dense"
                error={!!errors.interests}
                helperText={errors.interests?.message ?? ""}
              />
            )}
          />
        </Box>
      )}
      <Button variant="contained" color="primary" type="submit">
        Next
      </Button>
    </form>
  );
};

export default FormFirstStep;
