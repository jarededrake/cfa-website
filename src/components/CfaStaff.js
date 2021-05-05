import React from "react";
import photo1 from "../images/Debbie-Chaves-Headshot.jpg";
import "./CfaStaff.css";

const CfaStaff = () => {
  return (
    <div className='CfaStaff'>
      <div class='jumbotron jumbotron-fluid'>
        <div class='container'>
          <h1 class='display-4'>Colorado Family Action Staff</h1>
        </div>
      </div>
      <div class='card' style={{ width: "18rem" }}>
        <img
          src={photo1}
          class='card-img-top'
          alt='...'
          style={{ height: "24rem" }}
        />
        <div class='card-body'>
          <h5 class='card-title'>Debbie Chaves</h5>
          <h6>Executive Director</h6>
          <p class='card-text'>
            “Family DOES Matter!” – I believe safeguarding God’s design for the
            family will help secure our future. As the mom of seven children and
            wife for 30 years, I have worked as Executive Director since 2014
            making my Christian values reality in state and local government.
            With 16 years of experience in political leadership and campaign
            work, I saw a need for Christians to step into roles that will
            influence society and public policy. I now develop strategy, sponsor
            outreach events and speak on the importance of life, religious
            freedom and traditional family values.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CfaStaff;
