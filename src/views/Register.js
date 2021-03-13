import React from 'react';
// import sections
import RegisterForm from '../components/sections/RegisterForm';

class Register extends React.Component {

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
      <RegisterForm className="illustration-section-01" />
    );
  }
}

export default Register;