import React, { useContext } from 'react';
import FeedbackContext from '../../Context/FeedbackContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import Card from './shared/Card';

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, handleEdit } = useContext(FeedbackContext);
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <FontAwesomeIcon
        className='edit'
        icon={faEdit}
        onClick={() => handleEdit(item)}
      />
      <FontAwesomeIcon
        className='close'
        icon={faTimes}
        onClick={() => deleteFeedback(item.id)}
      />
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};
export default FeedbackItem;
