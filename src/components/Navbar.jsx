import { Link } from "react-router-dom";
import './navbar.css'

const Navbar = () => {


  return (
    <>
    <nav className='navbar'>
    <Link to='/'>Logo</Link>
      <ul className='nav-menu'>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>Home</Link>
          </li>
        <li className='nav-item'>
          <Link to='news' className='nav-link'>Blog</Link>
          </li>
          <li className='nav-item'>
          <Link to='add-blog' className='nav-link'>Add Blog</Link>
          </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar
