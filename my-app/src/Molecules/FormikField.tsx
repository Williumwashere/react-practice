import { ErrorMessage, Field } from "formik";
import React from "react";

interface FormikFieldProps {
  name: string;
  as: any;
  label: string;
  children?: React.ReactNode;
}

export default function FormikField({
  name,
  as,
  label,
  children,
}: FormikFieldProps) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name} as={as}>
        {children}
      </Field>
      <ErrorMessage name={name} />
    </div>
  );
}
