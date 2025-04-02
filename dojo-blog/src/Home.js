import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true)
  useEffect(() => {
    console.log('useEffect ran', blogs)
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setBlogs(data)
        setIsPending(false)
      })
  }, []);

  return (
    <section className="home">
      { isPending && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
    </section>
   );
}

export default Home;