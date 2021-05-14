import React from "react";
import "./GetInvolved.css";

const GetInvolved = () => {
  return (
    <div className='GetInvolved'>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
          <h1 className='display-4'>Get Involved</h1>
        </div>
      </div>
      <div className='container'>
        <div className='getinvolved-statement'>
          <p>
            Colorado Family Action works through election outreach, lobbying and
            leadership development to ensure that public policy promotes
            foundational principles. CFA is a 501(c)4 nonprofit organization;
            donations are not tax-deductible. Your generous support will play a
            foundational role in rebuilding the moral fiber of our state. For
            questions about your transactions or to request a refund please
            contact the organization office at (877)239-7355 and
            info@cofamily.org
          </p>
        </div>
        <hr />
        <div class='card text-center'>
          <div class='card-header'>
            <ul class='nav nav-tabs card-header-tabs'>
              <li class='nav-item'>
                <a class='nav-link active' aria-current='true' href>
                  Active
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href>
                  Link
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href tabindex='-1' aria-disabled='true'>
                  Disabled
                </a>
              </li>
            </ul>
          </div>
          <div class='card-body'>
            <h5 class='card-title'>Special title treatment</h5>
            <p class='card-text'>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href class='btn btn-primary'>
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
