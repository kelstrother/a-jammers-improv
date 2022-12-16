// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";


export default function Home() {
  // grabbing the data, but calling it blogs
  const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs')

  

  return (
    <div className="home">
      { error && <div>{ error }</div>}
      { isLoading && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} title="Unload your mind." />}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'jaco')} title="Jacos Improv" /> */}
    </div>
  );
}
