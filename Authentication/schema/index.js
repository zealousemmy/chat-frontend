import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  fullName: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(32).required(),
  referral: Yup.string(),
  checker: Yup.boolean().default(false),
});

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(32).required(),
  checker: Yup.boolean().default(false),
});
