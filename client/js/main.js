import React from "react";
import ReactDOM from "react-dom";
import App from './components/app';

if (process.env.NODE_ENV !== 'production') {
   console.log('Running at development');
}

ReactDOM.render(
  <App />,
  document.getElementById('main')
);