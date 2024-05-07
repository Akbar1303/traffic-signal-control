

import {
    TURN_ON_SIGNAL,
    TURN_OFF_SIGNAL,
    CHANGE_PHASE_DURATION,
    START_SYSTEM,
    STOP_SYSTEM
  } from '../actions/actionTypes';
  import initialState from '../store/initialState';
  
  const trafficSignalReducer = (state = initialState, action) => {
    switch (action.type) {
      case TURN_ON_SIGNAL:
        return {
          ...state,
          trafficLights: {
            ...state.trafficLights,
            [action.payload]: true
          }
        };
      case TURN_OFF_SIGNAL:
        return {
          ...state,
          trafficLights: {
            ...state.trafficLights,
            [action.payload]: false
          }
        };
      case CHANGE_PHASE_DURATION:
        return {
          ...state,
          phaseDuration: {
            ...state.phaseDuration,
            [action.payload.signal]: action.payload.duration
          }
        };
      case START_SYSTEM:
        return {
          ...state,
          isSystemRunning: true
        };
      case STOP_SYSTEM:
        return {
          ...state,
          isSystemRunning: false
        };
      default:
        return state;
    }
  };
  
  export default trafficSignalReducer;
  