import { useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([
    { title: 'How to cope with being the best.', body: 'lorem ipsum...', author: 'Jaco', id: 1 },
    { title: 'Welcome to the party!', body: 'lorem ipsum...', author: 'Stasik', id: 2 },
    { title: 'Being old and in a jamband...', body: 'lorem ipsum...', author: 'Joel', id: 3 }
  ])

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>Written by: { blog.author }</p>
        </div>
      ))}
    </div>
  );
}
