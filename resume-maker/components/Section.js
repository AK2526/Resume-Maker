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
    this.state.forms.val.push({ label: label, formState: {val: "", type:true} });
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

    deleteForm = function(index) {
        console.log("DELETEING" + index);
        // this.state.forms.val[index-3].formState.val = "";
        // this.state.forms.val[index-2].formState.val = "";
        // this.state.forms.val[index-1].formState.val = "";
        // this.state.forms.val[index-0].formState.val = "";
        // this.state.forms.val[index-2].formState.type = false;
        // this.state.forms.val[index-3].formState.type = false;
        // this.state.forms.val[index-1].formState.type = false;
        // this.state.forms.val[index-0].formState.type = false;
        this.state.forms.val.splice(index-3, 4);
        this.setState(prevState => ({
            forms: prevState.forms
        }), () => console.log("Deleted Form"));
        this.render();
    }

    render() {
        return (
            <div style={{border: '1px solid white', borderRadius: '5px'}} className='my-5 px-5'>
                <div className='flex flex-col my-5' >
                    <h2 className='text-3xl mb-5'>{this.state.name}</h2>
                    {this.state.forms.val.map((form, index) => (
                        <React.Fragment key={index}>
                            <div className={`${index%4 === 0 && index > 3? "border-t-2 mt-4 pt-4": ""}`}>

                                {<FormField label={form.label} setVal={form.formState} type={true} />}
                                {index%4 === 3 && <button onClick={() => this.deleteForm(index)}>Delete Form</button>}
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