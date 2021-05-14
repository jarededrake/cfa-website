import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='Footer'>
      <hr />
      <div class='container' style={{ marginRight: "11.75rem" }}>
        <div class='row' style={{ textAlign: "left" }}>
          <div class='col'>
            <h3>Help Us Help You</h3>
            <button className='btn btn-outline-primary'>Donate Now</button>
          </div>
          <div class='col'>
            <p>3472 Research Pkwy</p>
            <p>Ste. 104-253</p>
            <p>Colorado Springs, CO 80920</p>
            <p>Phone: 1-877-239-7355</p>
            <p>Fax: 1-719-231-2657</p>
            <p>
              Email: <a href='mailto:info@cofamily.org'>info@cofamily.org</a>
            </p>
          </div>
          <div class='col'>
            <h3>Get Involved</h3>
            <button className='btn btn-outline-primary'>Learn More!</button>
          </div>
        </div>
      </div>
      <hr />
    </footer>
  );
};

export default Footer;
