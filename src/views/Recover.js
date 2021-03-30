import React from 'react';
// import sections
import RecoverForm from '../components/sections/RecoverForm';

class Recover extends React.Component {

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
      <RecoverForm className="illustration-section-01" />
    );
  }
}

export default Recover;