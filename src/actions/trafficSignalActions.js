// src/actions/trafficSignalActions.js

import {
    TURN_ON_SIGNAL,
    TURN_OFF_SIGNAL,
    CHANGE_PHASE_DURATION,
    START_SYSTEM,
    STOP_SYSTEM
  } from './actionTypes';
  
  // Action creators
  export const turnOnSignal = (signal) => {
    return {
      type: TURN_ON_SIGNAL,
      payload: signal // Signal name: 'red', 'yellow', 'green'
    };
  };
  
  export const turnOffSignal = (signal) => {
    return {
      type: TURN_OFF_SIGNAL,
      payload: signal // Signal name: 'red', 'yellow', 'green'
    };
  };
  
  export const changePhaseDuration = (signal, duration) => {
    return {
      type: CHANGE_PHASE_DURATION,
      payload: {
        signal: signal, // Signal name: 'red', 'yellow', 'green'
        duration: duration // New duration in seconds
      }
    };
  };
  
  export const startSystem = () => {
    return {
      type: START_SYSTEM
    };
  };
  
  export const stopSystem = () => {
    return {
      type: STOP_SYSTEM
    };
  };
  