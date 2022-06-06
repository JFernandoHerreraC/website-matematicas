import React, { Component } from 'react'
export default class Navigator extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light shadow p-3 mb-5 bg-white rounded">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Matematicas</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ml-auto" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/description">Descripción</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/example">Ejemplos</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
