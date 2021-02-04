import "../styles/header.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.userLogin);

  const onSignClick = () => {
    dispatch(logout());
  };

  return (
    <>
      <nav className="nav">
        <Link to="/">HAUFE COMPANY</Link>
        <ul className="list nav__list">
          <li className="nav__item">
            <Link to="/signup">Sign up</Link>
          </li>
          <li className="nav__item" onClick={onSignClick}>
            {isLoggedIn.userInfo ? (
              <Link to="/">Sign out </Link>
            ) : (
              <Link to="/signin">Sign in</Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
