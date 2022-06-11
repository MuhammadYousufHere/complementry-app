import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const AboutIcon = () => {
  return (
    <div className='about-link'>
      <Link to='/about'>
        <FontAwesomeIcon icon={faQuestion} />
      </Link>
    </div>
  );
};

export default AboutIcon;
