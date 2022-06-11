import React, { useReducer } from 'react';
import Card from '../components/FeedbackApp/shared/Card';
import Button from '../components/FeedbackApp/shared/Button';
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      };

    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      };

    case 'RESET':
      return {
        ...state,
        counter: 0,
      };

    default:
      return state;
  }
};

const Reducer = () => {
  const initialState = {
    // background: '#edcf',
    // color: '#000',
    counter: 0,
  };
  const style = {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center',
    gap: '12px',
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Card>
      <div style={style}>
        <Button
          className='btn primary'
          onClick={() => dispatch({ type: 'INCREMENT' })}
        >
          Increment
        </Button>
        <Button
          className='btn primary'
          onClick={() => dispatch({ type: 'DECREMENT' })}
        >
          Decrement
        </Button>
        <Button
          className='btn secondary'
          onClick={() => dispatch({ type: 'RESET' })}
        >
          Reset
        </Button>
      </div>
      <div style={style}>
        <h1>{state.counter}</h1>
      </div>
    </Card>
  );
};

export default Reducer;
