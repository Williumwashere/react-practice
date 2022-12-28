import React from "react";

interface BlogProps {
    name: string;
    blog: string;
    age: string | number;
  }

export default function Blog({name,blog,age}:BlogProps) {
  return (
    <div>
        <h3>User:{name}</h3>
        <p>age "{age}"</p>
        <p>Said~{blog}</p>
    </div>
  )};
