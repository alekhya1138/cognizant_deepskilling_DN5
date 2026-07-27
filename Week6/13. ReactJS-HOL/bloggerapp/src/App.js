import React, { useState } from "react";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {
  const [show, setShow] = useState("books");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Blogger App</h1>

      <button onClick={() => setShow("books")}>Books</button>
      <button onClick={() => setShow("blogs")}>Blogs</button>
      <button onClick={() => setShow("courses")}>Courses</button>

      <hr />

      {show === "books" && <BookDetails />}
      {show === "blogs" && <BlogDetails />}
      {show === "courses" && <CourseDetails />}
    </div>
  );
}

export default App;