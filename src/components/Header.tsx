import { Link, useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <ul>
        <li>
          <button onClick={()=>{navigate("/")}}>Home</button>
          </li>
        <li>
          <Link to={"/about"}>About</Link>
          </li>
      </ul>

    </header>
  );
}

export default Header;