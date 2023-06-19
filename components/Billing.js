import React from 'react';
import { connect } from 'react-redux';

import { setContent } from 'actions/manageContent';

import PersonalInfo from 'components/PersonalInfo.js';
import Addon from 'components/Addon';

function Billing({setContent}){
  function next(){
    setContent(<Addon />);
  }
  function prev(){
    setContent(<PersonalInfo />);
  }
  return (
    <React.Fragment>
      {/*<!-- Step 2 start -->*/}
      
      Select your plan
      You have the option of monthly or yearly billing.
      
      Arcade
      $9 / mo
      
      Advanced
      $12 / mo
      
      Pro
      $15 / mo
      
      Monthly
      Yearly
      
      <button className="btn btn-outline-primary d-block" onClick={prev}>Go Back</button>
      <button className="btn btn-outline-primary" onClick={next}>Next Step</button>
      
      {/*<!--Step 2 end -->*/}
    </React.Fragment>
  );
}

const mapDispatchToProps = {
  setContent
}

export default connect(null, mapDispatchToProps)(Billing);