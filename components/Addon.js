import React from "react";
import { connect } from 'react-redux';

import { setContent } from 'actions/manageContent';

import Billing from 'components/Billing.js';
import ConfirmSubscription from 'components/ConfirmSubscription.js'

function Addon({setContent}){
  function prev(){
    setContent(<Billing />);
  }
  function next(){
    setContent(<ConfirmSubscription />);
  }
  return (
    <div className="row">
      {/*<!-- Step 3 start -->*/}
        Pick add-ons
        Add-ons help enhance your gaming experience.
      
        Online service
        Access to multiplayer games
        +$1/mo
      
        Larger storage
        Extra 1TB of cloud save
        +$2/mo
      
        Customizable Profile
        Custom theme on your profile
        +$2/mo
      
        <button className="btn btn-outline-primary" onClick={prev}>Go Back</button>
        <button className="btn btn-outline-primary" onClick={next}>Next Step</button>
      
        {/*<!-- Step 3 end -->*/}
    </div>
  );
}

const mapDispatchToProps = {
  setContent
}

export default connect(null, mapDispatchToProps)(Addon);