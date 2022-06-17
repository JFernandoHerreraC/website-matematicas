import React, { Component } from 'react'
import AllPagesPDFViewer from './all-pages';
import './all-pages.css';

import Pdf from '../assets/pdf/ecuaciones_reducibles_a_exactas.pdf';

export default class Example extends Component {
    render() {
        return (
            <div className="mt-5">
                <div className="card">
                    <div className="card-body">
                        <h1 className="text-center animate__animated animate__slideInUp">Ejemplos</h1>
                        <div className="text-center">
                            <div className="all-page-container">
                                <AllPagesPDFViewer pdf={Pdf} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
