

import React from 'react';
import './TrafficSignalControl.css';

const TrafficLight = ({ color, isOn }) => {
  return (
    <div className={`traffic-light ${color} ${isOn ? 'on' : 'off'}`}></div>
  );
};

export default TrafficLight;
