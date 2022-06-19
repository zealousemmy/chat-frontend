import * as Yup from "yup";

const validationSchema = Yup.object({
  product: Yup.string().required("Please select a product").oneOf(products),
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  wouldRecommend: Yup.boolean().default(false),
});
