import React, { Component } from 'react';
import FormRegister from './FormRegister';
import Login from './Login';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push('/Home');
  }
  render() {
    return (
    <HashRouter>
      <div className='appContainer'>
       <FormRegister/>
       <p>Do you already have an account?<br/>
          Please Log in.</p>
       <NavLink to='/login'>LogIn</NavLink>
            {/* <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>*/}
       <div className='content'>
        <Route path='/login' render={(props) => <Login {...props} handleSuccessfulAuth={this.handleSuccessfulAuth}/>}/>
       </div>
     </div>
    </HashRouter>

    );
  }
}


export default App;
