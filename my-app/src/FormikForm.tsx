import { ErrorMessage, Field, Form, Formik, FormikConfig } from "formik";
import React from "react";
import { schema } from "./schema";
import { BlogObj } from "./Types";

export default function FormikForm() {
  const handleSubmit: FormikConfig<BlogObj>["onSubmit"] = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik<BlogObj>
      initialValues={{ name: "", blog: "" , age:13}}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <div>
          <label htmlFor="name">Name:</label>
          <Field name="name" as="input" />
          <ErrorMessage name="name" />
        </div>
        <div>
          <label htmlFor="blog">Blog:</label>
          <Field name="blog" as="textarea" />
          <ErrorMessage name="blog" />
        </div>
        <div>
          <label htmlFor="age"></label>
          <Field name="age" as="select">
            {new Array(87).fill(1).map((_, i) => (
              <option value={i + 13}>{i + 13}</option>
            ))}
          </Field>
        </div>
        <button type="submit">Push me</button>
      </Form>
    </Formik>
  );
}
