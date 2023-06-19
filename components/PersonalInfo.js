import React from 'react';
import { connect } from 'react-redux';

import { setContent } from 'actions/manageContent';

import Billing from '/components/Billing.js';

function PersonalInfo({setContent}){
  function validate(e){
    e.preventDefault;
    setContent(<Billing />);
  }
  return (
    <div className="row">
      {/*<!-- Step 1 start -->*/}
      <h1 className="primary">Personal info</h1>
      <p>
      Please provide your name, email address, and phone number.
      </p>
      <form onSubmit={validate}>
        <label className="d-block">Name</label>
        <input placeholder="e.g.Stephen King" />
        
        <label className="d-block">Email Address</label>
        <input type="email" placeholder="e.g.stephenking @lorem.com" />
        
        <label className="d-block">Phone Number</label>
        <input type="tel" placeholder="e.g. + 1 234 567 890" />
        
        <button className="btn btn-primary rounded d-block" type="submit">Next Step</button>
        
        {/*<!--Step 1 end -->*/}
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  setContent
}

export default connect(null, mapDispatchToProps)(PersonalInfo);