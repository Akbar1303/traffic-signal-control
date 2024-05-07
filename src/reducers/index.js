

import { combineReducers } from 'redux';
import trafficSignalReducer from './trafficSignalReducer';

const rootReducer = combineReducers({
  trafficSignal: trafficSignalReducer,
  // Add other reducers here if needed
});

export default rootReducer;
