import { useState, useEffect } from "react";
import BlogList from "./BlogList";

export default function Home() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
    // dependency array allows useEffect to only re-render 1 time
  }, []);

  return (
    <div className="home">
     {blogs && <BlogList blogs={blogs} title="Unload your mind." />}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'jaco')} title="Jacos Improv" /> */}
    </div>
  );
}
