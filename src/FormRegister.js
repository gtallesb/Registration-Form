import React, { Component } from 'react';
import axios from 'axios';


class FormRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      pass: '',
      pass_confirm: '',
      errors: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    const {
      email,
      pass,
      pass_confirm
    } = this.state;

    axios.post('http://localhost:3001/registrations', {
      user: {
        email: email,
        pass: pass,
        pass_confirm: pass_confirm
      }
    },
    { withCredentials: true }
  ).then(response => {
    console.log('registration res', response);
  })
  .catch(error => {
    console.log('registration error', error);
  });
    e.preventDefault();
  }

  render() {
    return (
      <div className='formContainer'>
       <form onSubmit={this.handleSubmit}>
        <input type='email' name='email' placeholder='Enter your Email' value={this.state.email} onChange={this.handleChange} required />
        <br/>
        <input type='password' name='password' placeholder='Enter your Password' value={this.state.password} onChange={this.handleChange} required />
        <br/>
        <input type='password' name='pass_confirm' placeholder='Enter your Password again' value={this.state.pass_confirm} onChange={this.handleChange} required />
        <br/>
        <button type='submit'>Register</button>
       </form>
      </div>

    );
  }
}


export default FormRegister;
