import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';

import core from './core/reducers/core';

const rootReducer = combineReducers({
  core,
  routing: routerReducer
});

export default rootReducer;
