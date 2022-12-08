import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './Projects.css';



function Projects() {
    return (
        <>
            <div className="card text-bg-dark">
                <div className="card-header"><h4>
                    <b>My Projects</b>
                </h4></div>
                <div className="card-content">
                    <ul class="nav tabi nav-tabs mb-3 bg-dark" id="pills-tab" role="tablist">
                        <li class="nav-item bg-dark" role="presentation">
                            <button class="nav-link active" id="pills-mybilaccess-tab" data-bs-toggle="pill" data-bs-target="#pills-mybilaccess" type="button" role="tab" aria-controls="pills-mybilaccess" aria-selected="true">MyBILAccess</button>
                        </li>
                        <li class="nav-item bg-dark" role="presentation">
                            <button class="nav-link" id="pills-padonde-tab" data-bs-toggle="pill" data-bs-target="#pills-padonde" type="button" role="tab" aria-controls="pills-padonde" aria-selected="false">Pa'Donde</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active ctab" id="pills-mybilaccess" role="tabpanel" aria-labelledby="pills-mybilaccess-tab" tabindex="0">
                            <img className="homegif" src={require('../images/Home.gif')} alt="demo gif"></img>
                            <p className="my-bil-desc">This project was my first dive into Web3 
                            technologies, such as NFTs, DAO, DeFi, etc... The Project uses 
                            official goverment databases and these web3 technoligies to
                            make the funds and grants more accessible for Non-profit leaders, 
                            community leaders and goverment agencies.
                            </p>
                            <p>
                                Thanks to the hard work of the team we won first 
                                place in the Puerto Rico Web3 2.0 Hackathon
                            </p>
                            <button className="btn btn-success" onClick={()=>window.open("https://devpost.com/software/mybilaccess")}>More Information</button>
                        </div>
                        <div class="tab-pane fade ctab" id="pills-padonde" role="tabpanel" aria-labelledby="pills-padonde-tab" tabindex="0">...</div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Projects;