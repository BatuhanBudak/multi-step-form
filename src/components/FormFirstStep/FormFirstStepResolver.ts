import * as yup from "yup";

export const FirstPageSchema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .min(3, "must be at lest 3 characters long")
    .max(15, "must be 15 characters at the most"),
  lastName: yup.string().optional(),
  age: yup
    .number()
    .transform((value) =>
      isNaN(value) || value === null || value === undefined ? 0 : value
    )
    .required()
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
      .required("Since you checked more details this field is required")
      .min(10, "Please enter at least 10 characters"),
  }),
});
