const BlogList = (props) => {
  const { blogs, title } = props;

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <article className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
        </article>
      ))}
    </div>
   );
}

export default BlogList;