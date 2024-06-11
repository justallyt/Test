import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
const Header = () => {
  return (
    <header>
              <div className="inner-row">
                      <div className="header-content">
                                <Link to={"/"} className="logo">
                                          <img src={logo} alt="" />
                                </Link>
                                <Link className="action" to={'/reading-list'}>Reading List</Link>
                      </div>
              </div>
    </header>
  )
}

export default Header