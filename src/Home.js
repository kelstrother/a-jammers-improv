import { useState } from "react";
import BlogList from './BlogList'

export default function Home() {
  const [blogs, setBlogs] = useState([
    { title: 'How to cope with being the best.', body: 'lorem ipsum...', author: 'jaco', id: 1 },
    { title: 'Welcome to the party!', body: 'lorem ipsum...', author: 'jaco', id: 2 },
    { title: 'Being old and in a jamband...', body: 'lorem ipsum...', author: 'joel', id: 3 }
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs)
  }

  return (
    <div className="home">
     <BlogList blogs={blogs} title="All Improv!" handleDelete={handleDelete} />
     {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'jaco')} title="Jacos Improv" /> */}
    </div>
  );
}
