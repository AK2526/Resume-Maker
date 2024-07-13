import React, { useState } from 'react';
import Section from './Section';
import Button from './Button';

class Doc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [],
        };
        this.addSection("Required")
        this.addSection("Education")
        this.addSection("Project")
       
        
    }

    addSection = function(name){
        this.state.sections.push({name: name, data: {val: []}});
        this.setState(prevState => ({
                    sections: prevState.sections
                }), () => console.log("Added Section"));
    }

    logData()
    {
        console.log(this.state);
    }

    render() {
        return (
            <div className='flex flex-col'>
                {this.state.sections.map((section, index) => (
                    <React.Fragment key={index}>
                        <Section name={section.name} sectionData = {section.data}/>
                    </React.Fragment>
                ))}

                <button onClick={() => this.logData()}>CLICKK</button>
            </div>
        );
    }
}


export default Doc;