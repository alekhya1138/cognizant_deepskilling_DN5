import React from "react";

function BlogDetails() {
  const blogs = [
    { id: 1, title: "React Tips" },
    { id: 2, title: "JS Tricks" }
  ];

  return (
    <div>
      <h2>📝 Blog Details</h2>
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <p key={blog.id}>{blog.title}</p>
        ))
      ) : (
        <p>No Blogs Available</p>
      )}
    </div>
  );
}

export default BlogDetails;