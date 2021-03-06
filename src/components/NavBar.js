import React from "react";
import { Link } from "react-router-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import brand from "../images/logo.jpg";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light py-4 navbar-default fixed-top'>
      <div className='container'>
        <a className='navbar-brand' href>
          <img src={brand} alt='' width='140' height='60' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <Link to='/' className='nav-link' href>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href
                id='navbarDropdownMenuLink'
                data-toggle='dropdown'
                aria-expanded='false'
              >
                About CFA
              </a>
              <div
                id='dropdown'
                className='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <Link to='/cfastaff' className='dropdown-item' href>
                  CFA Staff
                </Link>
                <Link to='/allianceofstates' className='dropdown-item' href>
                  Alliance of States
                </Link>
                <Link to='/faqs' className='dropdown-item' href>
                  FAQ
                </Link>
              </div>
            </li>
            <li className='nav-item'>
              <Link to='/events' className='nav-link' href>
                Events
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/getinvolved' className='nav-link' href>
                Get Involved
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/alerts' className='nav-link' href>
                Alerts
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contactus' className='nav-link' href>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <button type='button' class='btn btn-primary'>
          Donate
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
