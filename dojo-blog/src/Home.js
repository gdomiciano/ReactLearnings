import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    console.log('useEffect ran', blogs)
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setBlogs(data)
      })
  }, []);

  return (
    <section className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
    </section>
   );
}

export default Home;