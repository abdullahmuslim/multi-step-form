import React from 'react';
import { createStore } from 'redux';

import Addon from 'components/Addon';
import Billing from 'components/Billing';
import ConfirmSubscription from 'components/ConfirmSubscription';
import PersonalInfo from 'components/PersonalInfo';
import SubscriptionSuccess from 'components/SubscriptionSuccess';

const initialState = {
  main: <PersonalInfo />
};
const state = function reducer(state = initialState, action){
  switch (action.type) {
    case "SET_MAIN":
      return {
        ...state,
        main: action.data
      }
      break;
    default:
      return state;
  }
}

export default createStore(state);