import React, { useContext } from 'react';
import FeedbackContext from '../../Context/FeedbackContext';

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);

  // calc average

  let ave =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedback.length;

  ave = ave.toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(ave) ? '0' : ave}</h4>
    </div>
  );
};

export default FeedbackStats;
