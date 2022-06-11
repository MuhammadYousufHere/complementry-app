import React from 'react';
import { Navigate, useNavigate, Route, Routes } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

import Card from './shared/Card';

const Post = () => {
  const navigate = useNavigate();

  const redirectMe = () => {
    console.log('HELLO!');
    navigate('/about');
  };
  // redirection
  const state = 403;
  // const params = useParams();
  if (state === 404) {
    return <Navigate to='/notfound' />;
  }
  return (
    <div>
      <Card>
        Post
        {/* <p>
          id:
          {params.id}
        </p> */}
        <button onClick={redirectMe}>Click me</button>
        <Routes>
          <Route path='/show' element={<h1>Hello Kitty!</h1>} />
        </Routes>
      </Card>
    </div>
  );
};

export default Post;
