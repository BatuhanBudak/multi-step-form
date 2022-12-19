import * as yup from "yup";

export const SecondPageSchema = yup.object().shape({
  address: yup.string().max(400).required(),
  address2: yup.string().max(100).optional(),
  phoneNumber: yup.string().min(5).max(15).required(),
  city: yup.string().optional(),
  state: yup.string().optional(),
  zip: yup.string().optional(),
});
