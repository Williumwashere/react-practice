import { Field, Form, Formik, FormikConfig } from "formik";
import React from "react";

interface FormValues {
  blog: string;
}



export default function FormikForm() {
    const handleSubmit:FormikConfig<FormValues>["onSubmit"] = (values,actions) => {
        console.log(values)
        actions.resetForm()
    }

  return <Formik<FormValues> initialValues={{ blog: "" }} onSubmit={handleSubmit}>
    <Form>
        <Field name="blog" as="textarea"/>
        <button type="submit">Push me</button>
    </Form>
  </Formik>;
}
