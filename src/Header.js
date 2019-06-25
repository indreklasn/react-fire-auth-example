import React, { useContext } from "react";
import routes from "./routes";
import { Link } from "react-router-dom";
import { AuthContext } from "./index";

const Header = () => {
  const {isLoggedIn} = useContext(AuthContext);
  return (
    <ul className="nav">
    {routes.map((route, i) => (
      <li key={i}>
        <Link to={route.path}>{route.name}</Link>
      </li>
    ))}
    {isLoggedIn && <li><Link to="/reports">Reports</Link></li>}
  </ul>
  )
}


export default Header;
