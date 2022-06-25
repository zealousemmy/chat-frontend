import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  name: Yup.string().required(),
  user_name: Yup.string().required(),
  gender: Yup.string().required(),
  mobile_no: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(32).required(),
  referral_code: Yup.string(),
  checker: Yup.boolean().default(false),
});

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(32).required(),
  checker: Yup.boolean().default(false),
});

export const CreateChannelSchema = Yup.object().shape({
  channel_name: Yup.string().required(),
  channel_type: Yup.string().required(),
  channel_description: Yup.string(),
  channel_description_type: Yup.string().required(),
  channel_file: Yup.string().required(),
});
