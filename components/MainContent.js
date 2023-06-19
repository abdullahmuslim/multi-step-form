import React from 'react';

import { connect } from 'react-redux';

const MainContent = ({state}) => state;

function mapStateToProps(state){
  return {
    state: state.main
  };
}

export default connect(mapStateToProps)(MainContent);