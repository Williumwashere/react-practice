import * as Yup from "yup";

export const schema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 caracters")
    .max(10, "Your name is too long,chill."),
  blog: Yup.string()
    .required("Input is required")
    .min(5, "Input must be at least 5 characters")
    .max(20, "Cannot exceed 20 characters."),
    age: Yup.number().required(),
});
