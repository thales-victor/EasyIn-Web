import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';

class Home extends React.Component {

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
///comentário teste--------------
    return (
      <React.Fragment>
        <Hero className="illustration-section-01" />
        <FeaturesTiles />       
        {/* <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" /> */}
        {/* <Testimonial topDivider /> */}
      </React.Fragment>
    );
  }
}

export default Home;