import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Card from '../FeedbackApp/shared/Card';
const About = () => {
  return (
    <Card>
      <h4>About This Application</h4>
      <p>
        This is intensive app for leaving feedback / review for product and
        services.
      </p>
      <p>
        <Link to='/'>Go Back To Home</Link>
      </p>
    </Card>
  );
};

export default About;
