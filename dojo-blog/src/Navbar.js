import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <aside className="navbar">
      <h1>The Dojo Blog</h1>
      <nav className="links">
        <Link to="/">home</Link>
        <Link to="/create" >New Blog Post</Link>
      </nav>
    </aside>
   );
}

export default Navbar;