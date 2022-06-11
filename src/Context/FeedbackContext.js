import React, { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();
import FeedbackData from '../components/FeedbackApp/data/FeedbackData';
export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  useEffect(() => {
    fetchData();
  }, []);

  // fetch data
  const fetchData = async () => {
    const res = await fetch(
      'http://localhost:3030/feedback/?sort=id&_order=desc'
    );
    const data = await res.json();
    setFeedback(data);
    setIsLoading(false);
  };
  // add
  const addFeedback = async (newFeedback) => {
    const res = await fetch('http://localhost:3030/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await res.json();
    setFeedback([data, ...feedback]);
    // newFeedback.id = Math.floor(Math.random() * 100);
    // setFeedback([newFeedback, ...feedback]);
  };
  // delete
  const deleteFeedback = async (id) => {
    if (
      window.confirm(
        'This is permanent action, Are you sure you want to delete this?'
      )
    ) {
      await fetch(`http://localhost:3030/feedback/${id}`, {
        method: 'DELETE',
      });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  // update

  const handleUpdate = async (id, updateItem) => {
    const res = await fetch(`http://localhost:3030/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateItem),
    });
    const data = await res.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
    // setFeedback(
    //   feedback.map((item) =>
    //     item.id === id ? { ...item, ...updateItem } : item
    //   )
    // );
  };
  // edit
  const handleEdit = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        handleEdit,
        handleUpdate,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
