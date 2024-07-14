import React from 'react';


class FormField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: props.label,
            value: "",
            setVal: props.setVal,
            type: props.type
        };
    }
    handleChange = (e) => {
        this.setState({ value: e.target.value });
        this.state.setVal.val= e.target.value;
    };

    render() {
        return (
            
            <div className='flex flex-col'>
                {this.state.type && <label  className={`text-xl px-2  `} >{this.state.label}</label>}
                {this.state.type && <input className={`w-full bg-gray-400 rounded-lg h-10 my-2 text-black px-2`} name={this.state.label} type="text" value={this.state.value} onChange={this.handleChange} />}
            </div>
        );
    }
}


export default FormField;