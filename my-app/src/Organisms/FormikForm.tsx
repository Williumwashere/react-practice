import { Form, Formik, FormikConfig } from "formik";
import React from "react";
import { schema } from "../Templates/schema";
import { BlogObj } from "../Templates/Types";
import FormikField from "../Molecules/FormikField";

interface FormikFormProps {
  onSubmit?: (values: BlogObj) => void;
}

export default function FormikForm({ onSubmit }: FormikFormProps) {
  const handleSubmit: FormikConfig<BlogObj>["onSubmit"] = (values, actions) => {
    console.log(values);
    onSubmit?.(values);
    actions.resetForm();
    const sendOut = JSON.stringify(values);
    fetch("https://crimson-grass-ea1c.william-j-michaelis.workers.dev", { method: "POST", body: sendOut });
  };

  return (
    <Formik<BlogObj>
      initialValues={{ name: "", blog: "", age: 13 }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <FormikField name="name" as="input" label="Name:" />
        <FormikField name="blog" as="textarea" label="Blog:" />
        <FormikField name="age" as="select" label="Age:">
          {new Array(87).fill(1).map((_, i) => (
            <option value={i + 13}>{i + 13}</option>
          ))}
        </FormikField>
        <button type="submit">Push me</button>
      </Form>
    </Formik>
  );
}
