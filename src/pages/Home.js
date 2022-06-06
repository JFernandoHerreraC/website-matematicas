import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <div className="mt-5">
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="card-body">
            <h1 className="text-center">Ecuaciones diferenciales reducibles a exactas</h1>
            <p className="text-center text-justify p-2">Las ecuaciones diferenciales ordinarias de primer orden exactas cumplen la siguiente expresión diferencial: </p>
            <blockquote className="blockquote">
              <p className="mb-0 text-center">P(x,y)dx+Q(x,y)dy</p>
            </blockquote>
            <p className="text-center text-justify p-2"> Se considera una diferencial exacta en la región R del plano xy si y solo si corresponde a la diferencial total de alguna función F(x,y), en otras palabras </p>
            <blockquote className="blockquote">
              <p className="mb-0 text-center">dF(x,y)=P(x,y)dx+Q(x,y)dy</p>
            </blockquote>
          </div>
        </div>
      </div>
    )
  }
}

export default Home