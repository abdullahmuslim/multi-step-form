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
      
      <h1>Select your plan</h1>
      <p>
      You have the option of monthly or yearly billing.
      </p>
      
      <form className="container-fluid">
        <input id="arcade" type="radio" name="pricing" className="d-none" />
        <label htmlFor="arcade" className="row border border-primary rounded align-items-center my-2">
          <img className="col-3" src="assets/images/icon-arcade.svg"/>
          <div className="col">
            Arcade
            $9 / mo
          </div>
        </label>
        
        <input id="advanced" type="radio" name="pricing" className="d-none" />
        <label htmlFor="advanced" className="row border border-primary rounded align-items-center my-2">
          <img className="col-3" src="assets/images/icon-advanced.svg"/>
          <div className="col">
            Advanced
            $12 / mo
          </div>
        </label>
        
        <input id="pro" type="radio" name="pricing" className="d-none" />
        <label htmlFor="pro" className="row border border-primary rounded align-items-center my-2">
          <img className="col-3" src="assets/images/icon-pro.svg"/>
          <div className="col">
            Pro
            $15 / mo
          </div>
        </label>
        
        Monthly
        Yearly
        <div className="controller d-flex justify-content-between p-2 m-0">
          <button className="btn btn-light" onClick={prev}>Go Back</button>
          <button className="btn btn-primary" onClick={next}>Next Step</button>
        </div>
      </form>
      
      {/*<!--Step 2 end -->*/}
    </React.Fragment>
  );
}

const mapDispatchToProps = {
  setContent
}

export default connect(null, mapDispatchToProps)(Billing);