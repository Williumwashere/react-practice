import React, { useEffect, useState } from "react";
import BlogList from "../Organisms/BlogList";
import FormikForm from "../Organisms/FormikForm";
import { BlogObj } from "../Templates/Types";

export default function TestPage() {
  const [comments, setComments] = useState<BlogObj[]>([]);

  const update = () => {
    fetch("https://crimson-grass-ea1c.william-j-michaelis.workers.dev", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((comments) => setComments(comments));
  };

  useEffect(() => {
    update();
  }, []);

  return (
    <>
      <div>
        <FormikForm onSubmit={update} />
      </div>
      <div>
        <BlogList comments={comments} />
      </div>
    </>
  );
}
