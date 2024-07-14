import React, { useState } from 'react';
import Section from './Section';
import Button from './Button';
import ReactPDF from '@react-pdf/renderer';
import MyDocument from '../app/createPdf';
import Popup from 'reactjs-popup';
// import MyDocument from "./createPdf"

import dynamic from "next/dynamic";
import { PDFDownloadLink } from '@react-pdf/renderer';

const PDFViewer = dynamic(
    () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
    {
        ssr: false,
        loading: () => <p>Loading...</p>,
    },
);

class Doc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [],
            refresh: true,
            sectionName: ""
        };
        this.addSection("Required")
        this.addSection("Education")
        this.addSection("Project")


    }

    addSection = function (name) {
        this.state.sections.push({ name: name, data: { val: [] } });
        this.setState(prevState => ({
            sections: prevState.sections
        }), () => console.log("Added Section"));
    }

    refresh = function () {
        this.setState(prevState => ({
            sections: prevState.sections
        }), () => console.log("REFRESHED"));
    }

    logData() {
        console.log(this.state);
    }

    print() {
        ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);
    }

    deleteSection(index){
        this.state.sections.splice(index, 1);
        this.setState(prevState => ({
            sections: prevState.sections
        }), () => console.log("Deleted Section"));
    }

    render() {
        return (
            <div className='flex flex-col'>
                {this.state.sections.map((section, index) => (
                    <React.Fragment key={index}>
                        <Section name={section.name} sectionData={section.data} />
                        <Button name="Delete Section" onClick={() => this.deleteSection(index)} />
                    </React.Fragment>
                ))}
                <Popup trigger=
                    {<button>Add Section</button>}
                    modal nested>
                    {
                        close => (
                            <div className='modal bg-white text-black text-center py-5 px-5 border-black border-2'>
                                <div className='content '>
                                    Please enter the name of the section
                                </div>
                                <input type="text" className='my-4 text-center' value={this.state.sectionName} onChange={(e) => this.setState({ sectionName: e.target.value })} />
                                <div>
                                    <button onClick={() => {this.addSection(this.state.sectionName); close()}}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </Popup>
                <button onClick={() => this.logData()}>CLICKK</button>
                <button onClick={() => this.refresh()}>REFRESH</button>
                {<PDFViewer showToolbar="true" className=" mt-10" style={{ width: '100%', height: '800px' }}>
                    <MyDocument data={this.state.sections} />
                </PDFViewer>}

            </div>
        );
    }
}


export default Doc;
