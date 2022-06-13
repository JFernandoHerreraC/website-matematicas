import React, { Component } from 'react'

export default class NotFound extends Component {
  render() {
    return (
      <div className="mt-5">
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="card-body">
            <h1 className="text-center animate__animated animate__slideInDown">Lost?</h1>
            <p className="text-center text-justify p-2">We will help you return safely :)</p>
            <a className="btn btn-primary b-block rounded" href="/">Go to Home</a>
          </div>
        </div>
      </div>
    )
  }
}
