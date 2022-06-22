import React from 'react'
import './../styles/index.css';
import NavBar from './../components/NavBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import resume from './../images/HosamResume.pdf'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc= `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export default function Resume(){
    return(
        <div>
            <Header />
            <NavBar />
            <div className='center'>
                <h1>RESUME</h1>
                <Document
                    file={resume}
                    style = {{ width: '100vw', height: 'auto'}}
                    >
                        <Page scale={1.5} pageIndex={0} />
                    </Document>
            </div>
            <Footer />
        </div>
    )
}