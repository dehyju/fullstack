import { Link } from 'react-router-dom'
import logo from "../../assets/logo.svg"

const Navbar = () => {
  return (
    <nav className='flex h-20 bg-blue-200 font-bold text-blue-950 items-center'>
        <Link className="h-full" to="/">
            <img className="h-full" src={logo} alt='Logo'/>
        </Link>
        <div className='flex gap-x-3 mx-auto'>
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
        </div>
        <Link className="mr-3" to="/login">Login</Link>
    </nav>
  )
}

export default Navbar