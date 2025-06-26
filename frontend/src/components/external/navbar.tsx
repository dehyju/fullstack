import { Link } from 'react-router-dom'

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import logo from "../../assets/logo.svg"
import { MdEmail } from 'react-icons/md';


const Navbar = () => {
  return (
    <nav className='flex h-20 bg-blue-200 font-bold text-blue-950 items-center'>
      <Link className="h-full" to="/">
        <img className="h-full" src={logo} alt='Logo' />
      </Link>
      <div className='flex items-center gap-x-3 mx-auto'>
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/blog">Blog</Link>
        <a href='https://www.linkedin.com/in/stephen-t-j-leong/' target='_blank'><FaLinkedin /></a>
        <a href='https://github.com/dehyju' target='_blank'><FaGithub /></a>
        <a href='mailto:stephen.t.j.leong@gmail.com'><MdEmail /></a>
      </div>
      <Link className="text-xl mx-3" to="/login">Login</Link>
    </nav>
  )
}

export default Navbar