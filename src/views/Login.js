import React from 'react';
// import sections
import LoginForm from '../components/sections/LoginForm';

class Login extends React.Component {

  state = {
    videoModalActive: false
  }
  openModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: true });
  }

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: false });
  }

  render() {

    return (
      <LoginForm className="illustration-section-01" />
    );
  }
}

export default Login;