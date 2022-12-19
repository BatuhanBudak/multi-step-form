import * as yup from "yup";

export const ThirdPageSchema = yup.object().shape({
  finalThoughts: yup.string().optional(),
});
