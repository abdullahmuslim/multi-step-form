import React from 'react';
import ReactDom from 'react-dom';

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
  <div>
    <Main />
  </div>, document.getElementById("root"))