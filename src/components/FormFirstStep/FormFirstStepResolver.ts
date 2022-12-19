import * as yup from "yup";

export const FirstPageSchema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .min(3, "must be at lest 3 characters long")
    .max(15, "must be 15 characters at the most"),
  lastName: yup.string(),
  age: yup
    .number()
    .required()
    .positive()
    .integer()
    .min(18, "Must be at least 18 years old"),
  email: yup.string().email("Not a valid email"),
  gender: yup.string().oneOf(["female", "male", "other"]).label("Your gender"),
  moreDetails: yup.boolean(),
  interests: yup.string().when("moreDetails", {
    is: true,
    then: yup
      .string()
      .required("Since you checked more details this field is required"),
  }),
});
