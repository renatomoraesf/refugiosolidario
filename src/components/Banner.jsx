import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ title, subtitle, showButton = false, buttonText, buttonLink }) => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          {showButton && (
            <Link to={buttonLink} className="btn">
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;