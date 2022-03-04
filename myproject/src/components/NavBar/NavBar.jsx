import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          uClinic
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/rendezvous">
                Rendez-vous
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/specialités">
                Specialités
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
