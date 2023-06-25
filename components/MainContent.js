import React from 'react';

import { connect } from 'react-redux';

const MainContent = ({state}) => <div className="mainContent rounded p-4"> {state} </div>;

function mapStateToProps(state){
  return {
    state: state.main
  };
}

export default connect(mapStateToProps)(MainContent);