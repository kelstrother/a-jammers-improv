import { useState } from "react";
import BlogList from './BlogList'

export default function Home() {
  const [blogs, setBlogs] = useState([
    { title: 'How to cope with being the best.', body: 'lorem ipsum...', author: 'Jaco', id: 1 },
    { title: 'Welcome to the party!', body: 'lorem ipsum...', author: 'Stasik', id: 2 },
    { title: 'Being old and in a jamband...', body: 'lorem ipsum...', author: 'Joel', id: 3 }
  ])

  return (
    <div className="home">
     <BlogList blogs={blogs} title="All Improv!" />
    </div>
  );
}
