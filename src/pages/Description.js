import React, { Component } from 'react'
import img_1 from '../assets/img/img_1.png';
import img_2 from '../assets/img/img_2.png';
export default class Description extends Component {
  render() {
    return (
      <div className="mt-5">
        <div className="card">
          <div className="card-body">
            <h1 className="text-center">Description</h1>
            <p className="text-center">Proposición: Sean </p>
            <blockquote className="blockquote">
              <p className="mb-0 text-center">$P(x,y)$ y $Q(x,y)$</p>
            </blockquote> 
            <p className="text-center">funciones continuas y diferenciables en una región R del plano xy.
              La expresión P(x,y)dx+Q(x,y)dy=0 es la diferencial exacta de una función F(x,y)</p> 
              <img src={img_1} className="img-fluid text-center" alt="Imagenen de la ecuación numero 1"/>
              <p>si y sólo si </p>
          <img src={img_2} className="img-fluid text-center" alt="Imagenes de la ecuación numero 2"/>
          </div>
        </div>
      </div>
    )
  }
}
