const Navbar = () => {
  return (
    <aside className="navbar">
      <h1>The Dojo Blog</h1>
      <nav className="links">
        <a href="/">home</a>
        <a href="/create" style={{
          color: 'white',
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }}>New Blog Post</a>
      </nav>
    </aside>
   );
}

export default Navbar;