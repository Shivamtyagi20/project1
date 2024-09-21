import React from 'react';

import { Link,useLocation} from "react-router-dom";
// import TextArea from './TextArea';
// import About from './About';

export default function Navbar(props) {
   const location = useLocation();

  return (
    <div className={`App`} >
     <nav className={`navbar navbar-expand-lg bg-${props.Nav}`} >
  <div className="container-fluid">
    <a className="navbar-brand " href="/">{props.title}</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active " aria-current="page" as={Link} to="/TextArea" >TextArea</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active " as={Link} to="/About">About</Link>
        </li>
       
      </ul>
       {location.pathname !== '/About' && (
            <form className="d-flex ms-auto" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary" type="submit">Search</button>
            </form>
          )}
          {location.pathname === '/About' && (
         <div className="d-flex align-items-center" style={{color: props.text}} >
            <div class="form-check form-switch me-2">
            <input class="form-check-input" type="checkbox" onClick={props.toDarkMode} role="switch" id="flexSwitchCheckDefault1"/>
            <label class="form-check-label" htmlFor="flexSwitchCheckDefault" >dark</label>  
            </div> 
            <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" onClick={props.toRedMode} role="switch" id="flexSwitchCheckDefault2"/>
            <label class="form-check-label" htmlFor="flexSwitchCheckDefault">RED</label>  
            </div>
         </div> 
          )}  
    </div>
  </div>
      </nav>
    </div>
  )
}
Navbar.defaultProps = {title: 'Home'}