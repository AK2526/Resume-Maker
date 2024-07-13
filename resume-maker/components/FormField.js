import React from 'react';


class FormField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: props.label,
            value: ""
        };
    }
    handleChange = (e) => {
        this.setState({ value: e.target.value });
    };

    render() {
        return (
            <div className='flex flex-col'>
                <label className='text-xl px-2'>{this.state.label}</label>
                <input className="w-full bg-gray-400 rounded-lg h-10 mt-2 text-black px-2" name={this.state.label} type="text" value={this.state.value} onChange={this.handleChange} />
            </div>
        );
    }
}


export default FormField;