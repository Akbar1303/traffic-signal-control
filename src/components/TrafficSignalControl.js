

import React from 'react';
import { connect } from 'react-redux';
import { turnOnSignal, turnOffSignal, startSystem, stopSystem, changePhaseDuration } from '../actions/trafficSignalActions';
import TrafficLight from './TrafficLight';
import './TrafficSignalControl.css';

const TrafficSignalControl = ({ trafficLights, phaseDuration, isSystemRunning, turnOnSignal, turnOffSignal, startSystem, stopSystem, changePhaseDuration }) => {
  
  const handleSignalToggle = (signal) => {
    if (trafficLights[signal]) {
      turnOffSignal(signal);
    } else {
      turnOnSignal(signal);
    }
  };

  const handlePhaseDurationChange = (signal, value) => {
    changePhaseDuration(signal, parseInt(value, 10));
  };

  return (
    <div className="traffic-signal-control">
      {/* <h1>Traffic Signal Control System</h1> */}
      <div className="traffic-light-section">
        <TrafficLight color="red" isOn={trafficLights.red} />
        <button className={trafficLights.red ? 'active' : ''} onClick={() => handleSignalToggle('red')}>{trafficLights.red ? 'Turn Off' : 'Turn On'}</button>
        <label>Duration (s):</label>
        <input type="number" value={phaseDuration.red} onChange={(e) => handlePhaseDurationChange('red', e.target.value)} />
      </div>
      <div className="traffic-light-section">
        <TrafficLight color="yellow" isOn={trafficLights.yellow} />
        <button className={trafficLights.yellow ? 'active' : ''} onClick={() => handleSignalToggle('yellow')}>{trafficLights.yellow ? 'Turn Off' : 'Turn On'}</button>
        <label>Duration (s):</label>
        <input type="number" value={phaseDuration.yellow} onChange={(e) => handlePhaseDurationChange('yellow', e.target.value)} />
      </div>
      <div className="traffic-light-section">
        <TrafficLight color="green" isOn={trafficLights.green} />
        <button className={trafficLights.green ? 'active' : ''} onClick={() => handleSignalToggle('green')}>{trafficLights.green ? 'Turn Off' : 'Turn On'}</button>
        <label>Duration (s):</label>
        <input type="number" value={phaseDuration.green} onChange={(e) => handlePhaseDurationChange('green', e.target.value)} />
      </div>
      <div className="control-buttons">
        {isSystemRunning ? (
          <button className="stop" onClick={stopSystem}>Stop System</button>
        ) : (
          <button className="start" onClick={startSystem}>Start System</button>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  trafficLights: state.trafficSignal.trafficLights,
  phaseDuration: state.trafficSignal.phaseDuration,
  isSystemRunning: state.trafficSignal.isSystemRunning
});

const mapDispatchToProps = {
  turnOnSignal,
  turnOffSignal,
  startSystem,
  stopSystem,
  changePhaseDuration
};

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignalControl);
