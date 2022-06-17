import React, { Component } from 'react';
import './Navigator.css';

export default class Navigator extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
          <a className="navbar-brand" href="/">Matematicas</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link efectHover1" href="/">Inicio <span class="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link efectHover2" href="/description">Descripción</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link efectHover3" href="/example">Ejemplos</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
