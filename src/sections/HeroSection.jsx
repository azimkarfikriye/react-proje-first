import React from 'react';
import "./HeroSection.scss";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-box">
          <div className="hero-content">
            <h1>A warm welcome!</h1>
            <p>
              Bootstrap utility classes are used to create this jumbotron since the old component
              has been removed from the framework. Why create custom CSS when you can use utilities?
            </p>
            <button className="btn-primary">Call to Action</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

