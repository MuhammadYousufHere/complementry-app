import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import FeedbackData from './FeedbackApp/data/FeedbackData';
import FeedbackItem from './FeedbackApp/FeedbackItem';
import FeedbackList from './FeedbackApp/FeedbackList';
import FeedbackStats from './FeedbackApp/FeedbackStats';
import Header from './FeedbackApp/Header';
FeedbackList;
import Form from './FeedbackApp/Form';
import AboutIcon from './FeedbackApp/AboutIcon';
import Post from './FeedbackApp/Post';
import { FeedbackProvider } from '../Context/FeedbackContext';
import Reducer from '../Reducer/Reducer';

function App() {
  return (
    // <Reducer />
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <Form />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />

            <Route path='/about' element={<About />} />
            <Route path='/post/*' element={<Post />} />
          </Routes>
          <AboutIcon />
        </div>
      </Router>
    </FeedbackProvider>
  );
}
export default App;
