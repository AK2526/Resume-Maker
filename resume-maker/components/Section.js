import React, { useState } from 'react';
import FormField from './FormField';
import Details from './details';


class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            forms: props.sectionData,
        };
        console.log("STATE" + this.state)
        this.state.forms.val = [];
        this.addMiniSection();
        
    }


    addForm = function(label){
    this.state.forms.val.push({ label: label, formState: {val: ""} });
    this.setState(prevState => ({
                forms: prevState.forms
            }), () => console.log("Added Form"));
    }

    addMiniSection = function()
    {
        let f = Details[this.state.name];
        if (f === undefined) {
            f = ["Title", "Subtitle", "Description", "Date"]
        }
        for (let i = 0; i < f.length; i++) {
            this.addForm(f[i]);
        }
    }

    render() {
        return (
            <div style={{border: '1px solid white', borderRadius: '5px'}} className='my-5 px-5'>
                <div className='flex flex-col my-5' >
                    <h2 className='text-3xl mb-5'>{this.state.name}</h2>
                    {this.state.forms.val.map((form, index) => (
                        <React.Fragment key={index}>
                            <div className={`${index%4 === 0 && index > 3? "border-t-2 mt-4 pt-4": ""}`}>
                                <FormField label={form.label} setVal={form.formState} />
                            </div>
                        </React.Fragment>
                    ))}
                    {this.state.name !== "Required" && <button onClick={() => this.addMiniSection()}>Add Form</button>}
                </div>
            </div>
        );
    }
}


export default Section;