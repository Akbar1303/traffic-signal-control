

const initialState = {
    trafficLights: {
      red: false,
      yellow: false,
      green: false
    },
    phaseDuration: {
      red: 10, // in seconds
      yellow: 3, // in seconds
      green: 15 // in seconds
    },
    isSystemRunning: false
  };
  
  export default initialState;
  