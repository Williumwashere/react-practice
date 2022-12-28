import React, { useState } from "react";
import BlogList from "../Organisms/BlogList";
import FormikForm from "../Organisms/FormikForm";
import { BlogObj } from "../Templates/Types";

export default function TestPage() {
  const [comments, setComments] = useState<BlogObj[]>([]);

  return (
    <>
      <div>
        <FormikForm
          onSubmit={(values) => {
            setComments([values, ...comments]);
          }}
        />
      </div>
      <div>
        <BlogList comments={comments} />
      </div>
    </>
  );
}
