import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'unfetch';
import DynamicRender from './DynamicRender';

const root = document.getElementById('app-container');

const App = ({ pageData }) =>
  <div className="app">
    <p>Hello, world</p>
    <DynamicRender data={pageData} />
  </div>;

fetch('http://localhost:3000/pageData')
  .then(res => res.json())
  .then(pageData => {
    ReactDOM.render(<App pageData={pageData} />, root);
  });
