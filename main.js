import React from 'react';
import ReactDom from 'react-dom';

import store from 'state';
import { Provider } from 'react-redux';

import MainContent from 'components/MainContent';
import Sidebar from 'components/Sidebar';

function Main(){
  return (
    <React.Fragment>
      <main className="container-fluid container-md">
        <Sidebar />
        <MainContent />
      </main>
      <footer className="attribution d-none">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://abdullahmuslim.github.io/portfolio">Abdullah Muslim</a>.
        </footer>
    </React.Fragment>
  );
}
ReactDom.render(
  <Provider store={store}>
    <Main />
  </Provider>, document.getElementById("root"))