import * as yup from "yup";

export const FirstPageSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Your First Name is required")
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .min(3, "Must be at lest 3 characters long")
    .max(15, "Must be 15 characters at the most"),
  lastName: yup.string().optional(),
  age: yup
    .number()
    .transform((value) =>
      isNaN(value) || value === null || value === undefined ? 0 : value
    )
    .required("Age is required")
    .positive()
    .integer()
    .min(18, "Must be at least 18 years old to continue"),
  email: yup.string().email("Not a valid email").optional(),
  gender: yup.string().oneOf(["female", "male", "other"]).label("Your gender"),
  moreDetail: yup.boolean().optional(),
  interests: yup.string().when("moreDetail", {
    is: true,
    then: yup
      .string()
      .required("This field is required if more details is checked")
      .min(10, "Please enter at least 10 characters"),
  }),
});
