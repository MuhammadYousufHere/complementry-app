import React, { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../../Context/FeedbackContext';

import Button from './shared/Button';
import Card from './shared/Card';
import Rating from './Rating';
const Form = () => {
  const { addFeedback, feedbackEdit, handleUpdate } =
    useContext(FeedbackContext);

  //
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [warning, setWarning] = useState('');
  //

  useEffect(() => {
    // return () => {
    console.log(123);
    // };

    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }

    // added the side effect
  }, [feedbackEdit]);

  //
  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setWarning(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setWarning('Text must be at least 10 characters! ');
    } else {
      setWarning(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        handleUpdate(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
    }
    setText('');
  };
  return (
    <Card>
      <form onSubmit={submitHandler}>
        <h4>How would you rate our service?</h4>
        <Rating select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            onChange={handleTextChange}
            value={text}
            placeholder='write a review...'
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {warning && <div className='message'>{warning}</div>}
      </form>
    </Card>
  );
};

export default Form;
