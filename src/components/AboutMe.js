import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutMe.css'

function AboutMe() {
  return (
    <><div className="card text-bg-dark mb-3">
      <div className="card-header"><h5><b>About Me</b></h5></div>
      <div className="card-body">
        <p className="card-text">
          I'm currently erolled on a Computer Science and Engeneering bachelor's degree
          at the University of Puerto Rico-Mayaguez, Where I'm developing my passion for
          Technology and Engeneering. I'm currently looking for opportunities to learn and gain experience
          in the Computer Science field. With this I can hopefully expand my knowledge in a faster rate.
          For example with this website I'm trying to learn Web development by doing it. I also have had other
          productive experiences that I'll explain later.</p>
      </div>
    </div><div className="card text-bg-dark mb-3">
        <div className="card-header"><h5><b>Acomplishments</b></h5></div>
        <div className="card-body">
          <div className="card-text">
            <ul>
              <li><h6><b>Puerto Rico Web3 Hackathon 2.0 Winner</b></h6>
              <ol>My team won a 1st place prize in our category by making 
                a platform that implements web3  technologies to help people 
                learn about and access the funds of the Bipartisian Law of 
                 Infrastrucuture</ol>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-success btn-custom" onClick={() => window.open("https://devpost.com/software/mybilaccess")}>MyBILAccess Project</button>
                </div>
              </li>
              <li><h6><b>Bloomberg x UPR Hackathon 4th place</b></h6></li>
                <li><h6><b>Qualified for Bloomberg's Bpuzzled finals in New York city 2023</b></h6>
                <ol>
                  Will be representing the my university in this logic and critical thinking competion with
                  themed puzzles and riddles.
                </ol></li>
                <li><h6><b>Eagle Scout</b></h6>
                  <ol>Highest rank in the Boy Scouts organization given
                    for leadership an care for the community and
                    nature.</ol>
                </li>
            </ul>
          </div>
        </div>
      </div></>
  );
}

export default AboutMe;