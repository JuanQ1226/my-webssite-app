import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"


function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark sticky-top" >
            <div className="container-fluid">
                <a className="navbar-brand">My Portafolio</a>
                <div className="d-flex">
                <button className="btn btn-primary" onClick={()=>window.open("https://drive.google.com/file/d/10e27_jaIorRLfuT2gAEbrlrkPae2AGYc/view?usp=sharing")}>My Resume</button>
                <button className="btn btn-dark" onClick={()=>window.open("https://github.com/JuanQ1226")}>My GitHub</button>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;