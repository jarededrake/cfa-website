import React from "react";
import "./AllianceOfStates.css";

const AllianceOfStates = () => {
  return (
    <div className='AllianceOfStates'>
      <div class='jumbotron jumbotron-fluid'>
        <div class='container'>
          <h1 class='display-4'>Alliance of States</h1>
        </div>
      </div>
      <div className='aos-statment'>
        <p>
          Colorado Family Action is our state-based family policy council. We
          partner with other state and national allies to promote and defend
          Christian liberties, including the practice of traditional marriage
          and family, the protection of life at all stages and the freedom to
          live a biblical lifestyle without discrimination. CFA works in
          conjunction with its sister organization CFA Foundation to mobilize
          people of faith as a unified voice to bring about cultural change.
        </p>
      </div>
      <div class='card' style={{ width: "18rem" }}>
        <img src='...' class='card-img-top' alt='...' />
        <div class='card-body'>
          <p class='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllianceOfStates;
