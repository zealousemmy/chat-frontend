import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(32).required(),
  referral: Yup.string().required(),
  wouldRecommend: Yup.boolean().default(false),
});

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(32).required(),
  wouldRecommend: Yup.boolean().default(false),
});
