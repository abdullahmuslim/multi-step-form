import React from "react";
import { connect } from 'react-redux';

import { setContent } from 'actions/manageContent';

import Addon from 'components/Addon';
import SubscriptionSuccess from 'components/SubscriptionSuccess';

function ConfirmSubscription({setContent}){
  function prev(){
    setContent(<Addon />);
  }
  function displaySuccess(){
    setContent(<SubscriptionSuccess />);
  }
  return (
    <React.Fragment>
      {/*<!-- Step 4 start -->*/}
    
      Finishing up
      Double-check everything looks OK before confirming.
    
      {/*<!-- Dynamically add subscription and add-on selections here -->*/}
    
      Total (per month/year)
      <div className="controller d-flex justify-content-between p-2 m-0">
        <button className="btn btn-light" onClick={prev}>Go Back</button>
        <button className="btn btn-primary" onClick={displaySuccess}>Confirm</button>
      </div>
      {/*<!-- Step 4 end -->*/}
    </React.Fragment>
  );
}

const mapDispatchToProps = {
  setContent
}

export default connect(null, mapDispatchToProps)(ConfirmSubscription);