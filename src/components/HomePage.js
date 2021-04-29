import React from "react";
import photo1 from "/Users/jareddrake/Desktop/client-projects/debbie-chavez-cfa/src/images/mak-xIG1sDfZoSA-unsplash.jpg";
import photo2 from "/Users/jareddrake/Desktop/client-projects/debbie-chavez-cfa/src/images/henry-ravenscroft-cdkocPV7LKY-unsplash.jpg";
import photo3 from "/Users/jareddrake/Desktop/client-projects/debbie-chavez-cfa/src/images/docusign-TRUpNFYtyyA-unsplash.jpg";
import photo4 from "/Users/jareddrake/Desktop/client-projects/debbie-chavez-cfa/src/images/derek-sutton-YbgkoJRR2LE-unsplash.jpg";
import photo5 from "/Users/jareddrake/Desktop/client-projects/debbie-chavez-cfa/src/images/daryan-shamkhali-7zn9UvUyRFE-unsplash.jpg";
import "./HomePage.css";

const HomePage = (props) => {
  return (
    <div
      id='carouselExampleIndicators'
      class='carousel slide'
      data-ride='carousel'
      data-interval='4500'
    >
      <ol class='carousel-indicators'>
        <li
          data-target='#carouselExampleIndicators'
          data-slide-to='0'
          class='active'
        ></li>
        <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
        <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
      </ol>
      <div class='carousel-inner'>
        <div class='carousel-item active'>
          <div id='carousel-image-1'></div>
        </div>
        <div class='carousel-item'>
          <div id='carousel-image-2'></div>
        </div>
        <div class='carousel-item'>
          <div id='carousel-image-3'></div>
        </div>
      </div>
      <a
        class='carousel-control-prev'
        href='#carouselExampleIndicators'
        role='button'
        data-slide='prev'
      >
        <span class='carousel-control-prev-icon' aria-hidden='true'></span>
        <span class='sr-only'>Previous</span>
      </a>
      <a
        class='carousel-control-next'
        href='#carouselExampleIndicators'
        role='button'
        data-slide='next'
      >
        <span class='carousel-control-next-icon' aria-hidden='true'></span>
        <span class='sr-only'>Next</span>
      </a>

      {/*Card Deck for Blog Post*/}

      <div id='card-deck' className='container'>
        <div className='row'>
          <div class='row row-cols-1 row-cols-md-3 py-5'>
            <div class='col mb-4'>
              <div class='card h-100'>
                <img src={photo1} class='card-img-top' alt='...' />
                <div class='card-body'>
                  <h5 class='card-title'>Card title</h5>
                  <p class='card-text'>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class='col mb-4'>
              <div class='card h-100'>
                <img src={photo2} class='card-img-top' alt='...' />
                <div class='card-body'>
                  <h5 class='card-title'>Card title</h5>
                  <p class='card-text'>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class='col mb-4'>
              <div class='card h-100'>
                <img src={photo3} class='card-img-top' alt='...' />
                <div class='card-body'>
                  <h5 class='card-title'>Card title</h5>
                  <p class='card-text'>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content.
                  </p>
                </div>
              </div>
            </div>
            <div class='col mb-4'>
              <div class='card h-100'>
                <img src={photo4} class='card-img-top' alt='...' />
                <div class='card-body'>
                  <h5 class='card-title'>Card title</h5>
                  <p class='card-text'>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Parallax Effect for Aesthitics */}

      <div class='parallax'></div>

      {/* Jumbotron for Mission Statment */}
      <div class='jumbotron jumbotron-fluid '>
        <div class='container'>
          <h1 class='display-4'>Fluid jumbotron</h1>
          <p class='lead'>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>

      {/* Extra Links */}

      <div id='contianer-exta-links' className='container'>
        <div className='row'>
          <div id='extra-link' class='card text-white'>
            <img src={photo5} class='card-img' alt='...' />
            <div class='card-img-overlay'>
              <h5 class='card-title'>Card title</h5>
              <p class='card-text'>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class='card-text'>Last updated 3 mins ago</p>
            </div>
          </div>
          <div id='extra-link' class='card text-white'>
            <img src={photo5} class='card-img' alt='...' />
            <div class='card-img-overlay'>
              <h5 class='card-title'>Card title</h5>
              <p class='card-text'>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class='card-text'>Last updated 3 mins ago</p>
            </div>
          </div>
          <div id='extra-link' class='card text-white'>
            <img src={photo5} class='card-img' alt='...' />
            <div class='card-img-overlay'>
              <h5 class='card-title'>Card title</h5>
              <p class='card-text'>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class='card-text'>Last updated 3 mins ago</p>
            </div>
          </div>
          <div id='extra-link' class='card text-white'>
            <img src={photo5} class='card-img' alt='...' />
            <div class='card-img-overlay'>
              <h5 class='card-title'>Card title</h5>
              <p class='card-text'>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class='card-text'>Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
