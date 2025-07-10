import React from 'react';

const Card = ({ icon, title, description, link, linkText }) => {
  return (
    <div className="card">
      <div className="card-icon">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <a href={link} className="btn btn-outline">
          {linkText || 'Saiba mais'}
        </a>
      )}
    </div>
  );
};

export default Card;