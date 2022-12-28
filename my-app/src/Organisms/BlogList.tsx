import React from "react";
import Blog from "../Molecules/Blog";
import { BlogObj } from "../Templates/Types";

interface BlogListProps {
  comments: BlogObj[];
}

export default function BlogList({ comments }: BlogListProps) {
  return (
    <div>
      {comments.map((blog) => (
        <Blog name={blog.name} age={blog.age} blog={blog.blog} />
      ))}
    </div>
  );
}
