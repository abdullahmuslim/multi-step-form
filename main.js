import React from 'react';
import ReactDom from 'react-dom';

import store from 'state';
import { Provider } from 'react-redux';

import MainContent from 'components/MainContent';
import Sidebar from 'components/Sidebar';

function Main(){
  return (
    <div className="container-fluid container-md">
      <Sidebar />
      <MainContent />
    </div>
  );
}
ReactDom.render(
  <Provider store={store}>
    <Main />
  </Provider>, document.getElementById("root"))