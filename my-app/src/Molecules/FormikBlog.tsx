import React from "react";

interface FormikBlogProps {
    name: string;
    blog: string;
    age: any;
  }

export default function FormikBlog({name,blog,age}:FormikBlogProps) {
  return (
    <div>
        <h3>User:{name}</h3>
        <p>age "{age}"</p>
        <p>Said~{blog}</p>
    </div>
  )};
