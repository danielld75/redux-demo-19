import React from 'react';
import CommentsList from './CommentsListContainer';
import './App.css';
import DevTools from './DevTools';

const App = () => {
  return (
    <div className={"App"}>
      <CommentsList />
      <DevTools />
    </div>
  )
};

export default App;
