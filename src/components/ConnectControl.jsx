import React from 'react';
import PropTypes from 'prop-types';

function ConnectControl() {
  return(
    <h1>Connect with local reaources!</h1>
  );
}

ConnectControl.propTypes = {
  resources: PropTypes.object,
  services: PropTypes.array,
  communities: PropTypes.array, 
  regions: PropTypes.array
}
export default ConnectControl;
