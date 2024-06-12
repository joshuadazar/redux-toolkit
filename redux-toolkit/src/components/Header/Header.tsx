import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Counter</Link>
        <Link to="/users">About</Link>
      </nav>
      
    </header>
  )
}

export default Header;