import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./ContactUsHeader.css";

const ContactUsHeader = () => {
  return (
    <div className='ContactUsHeader'>
      <nav class='navbar navbar-expand-lg navbar-light bg-light py-3 fixed-top'>
        <div className='container d-flex justify-content-start'>
          <div className='phone-number'>
            <FontAwesomeIcon icon={faPhone} />{" "}
            <span className='ml-1 pr-5'>1-877-239-7355</span>
          </div>
          <div className='email'>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <span className='ml-1'>info@cofamily.org</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ContactUsHeader;
