import React, { useState } from "react";


export default function Form() {
  const [comments, setComments] = useState<string[]>([]);
  const [blog, setBlog] = useState<string>("");
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setComments([...comments, blog]);
    setBlog("");
    // const values: FormValues = {
    //   blog: blog,
    // };
  };
  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setBlog(e.currentTarget.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="blog">Input field below me</label>
        <textarea name="blog" id="blog" value={blog} onChange={handleChange} />
        <button type="submit">Press me harder</button>
      </form>
      <div>
        {comments.map((comment) => (
          <div>{comment}</div>
        ))}
      </div>
    </div>
  );
}
