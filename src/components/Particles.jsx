import React, { Component } from 'react';
import Particles from '../particles.js';

class ParticlesComponent extends Component {
  componentDidMount() {
    this.initParticles();
  }

  initParticles() {
    // Initialize particles.js with your configuration
    particlesJS('particles-js', {
      // Paste your particles.js configuration here
      Particles
    });
  }

  render() {
    return <div id="particles-js" />;
  }
}

export default ParticlesComponent;
