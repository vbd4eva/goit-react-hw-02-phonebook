import React, { Component } from 'react'

export class FormAddingContact extends Component {

    state = {
        name: '',
        number: ''
    }

    handleChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({[name]:value});
    }

    handleSubmit = (e) => { 
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }
    reset = () => {
        this.setState({ name: '', number: ''});
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                    />
                </label>
                <label>
                    Number
                    <input
                        type="text"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}
                        required
                    />
                </label>
      
                <button type="submit">
                    Add contact
                </button>
            </form>
        )
    }
}

export default FormAddingContact

