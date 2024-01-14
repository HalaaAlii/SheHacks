import { Fragment } from "react";
import { FaHome } from "react-icons/fa";
import {Link} from "react-router-dom"
import '../App.css'
function Header() {
  const headerStyle = {
    backgroundColor: '#ffffff',
    top: 0,           // Align the header to the top of the viewport
    width: '100%', 
    height:'20px',   // Ensure the header spans the full width
    zIndex: 1000,     // Ensure the header is above other content
  };
  return (
    <>
      <div style={headerStyle} className="sticky-bottom">
        <nav className="navbar bg-body-tertiary">
          
          <div className="container-fluid">
            <a className="navbar-brand"> <FaHome navbar-brand className=" me-2"/></a>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success me-2" type="submit">
                Search
              </button>
              <button type="button" className="btn btn-secondary me-2">sign out</button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Header;
