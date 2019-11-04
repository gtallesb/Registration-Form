import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      pass: '',
      login_errors: ''
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
    } = this.state;

    axios.post('http://localhost:3001/sessions', {
      user: {
        email: email,
        pass: pass,
      }
    },
    { withCredentials: true }
  ).then(response => {
    if (response.data.logged_in) {
      this.props.handleSuccessfulAuth(response.data);
    }
  })
  .catch(error => {
    console.log('login error', error);
  });
    e.preventDefault();
  }

  render() {
    return (
      <div className='formContainer'>
       <form onSubmit={this.handleSubmit}>
        <input type='email' name='email' placeholder='Enter your Email' value={this.state.email} onChange={this.handleChange} required />
        <input type='password' name='password' placeholder='Enter your Password' value={this.state.password} onChange={this.handleChange} required />
        <button type='submit'>Submit</button>
       </form>
      </div>

    );
  }
}


export default Login;
