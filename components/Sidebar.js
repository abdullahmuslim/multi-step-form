import React from "react";
import { connect } from 'react-redux';

import { setContent } from 'actions/manageContent';

import Addon from 'components/Addon';
import Billing from 'components/Billing';
import ConfirmSubscription from 'components/ConfirmSubscription';
import PersonalInfo from 'components/PersonalInfo';

function Sidebar({setContent}){
  const components = [
    <PersonalInfo />,
    <Billing />,
    <Addon />,
    <ConfirmSubscription />
  ];
  function changeMainContent(e){
    const el = e.currentTarget;
    const parent = el.parentElement;
    const elID = [...parent.children].indexOf(el);
    setContent(components[elID]);
  }
  return (
    <div className="sidebar row align-items-start justify-content-center pt-4 pb-5">
      {/*<!-- Sidebar start -->*/}
      <div className="col p-0 m-0" onClick={changeMainContent} onMouseOver={changeMainContent}>
        <small className="btn btn-outline-secondary rounded-pill d-flex justify-content-center align-items-center">1</small>
        <div className="d-none d-md-inline">
          <h1>Step 1</h1>
          <small>Your info</small>
        </div>
      </div>
      
      <div className="col p-0 m-0" onClick={changeMainContent} onMouseOver={changeMainContent}>
        <small className="btn btn-outline-secondary rounded-pill d-flex justify-content-center align-items-center">2</small>
        <div className="d-none d-md-inline">
          <h1>Step 2</h1>
          <small>Select plan</small>
        </div>
      </div>
      
      <div className="col p-0 m-0" onClick={changeMainContent} onMouseOver={changeMainContent}>
        <small className="btn btn-outline-secondary rounded-pill d-flex justify-content-center align-items-center">3</small>
        <div className="d-none d-md-inline">
          <h1>Step 3</h1>
          <small>Add - ons</small>
        </div>
      </div>
      
      <div className="col p-0 m-0" onClick={changeMainContent} onMouseOver={changeMainContent}>
        <small className="btn btn-outline-secondary rounded-pill d-flex justify-content-center align-items-center">4</small>
        <div className="d-none d-md-inline">
          <h1>Step 4</h1>
          <small>Summary</small>
        </div>
      </div>
      {/*<!--Sidebar end -->*/}
    </div>
  );
}

const mapDispatchToProps = {
  setContent
}

export default connect(null, mapDispatchToProps)(Sidebar);