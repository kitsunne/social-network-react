import * as Yup from "yup";

const loginFormSchema = Yup.object({
  email: Yup.string().email("Invalid e-mail").required("Required"),
  password: Yup.string()
    .min(4, "Must be longer than 4 characters")
    .required("Required"),
});
export default loginFormSchema;
