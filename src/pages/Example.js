import React, { Component } from 'react'
import AllPagesPDFViewer from './all-pages';

import Pdf from '../assets/pdf/ecuaciones_reducibles_a_exactas.pdf';

export default class Example extends Component {
    render() {
        return (
            <div className="mt-5">
                <div className="card">
                    <div className="card-body">
                        <h1 className="text-center">Ejemplos</h1>
                        <div className="text-center">
                            <AllPagesPDFViewer pdf={Pdf} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
