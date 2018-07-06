import React from 'react';
import PropTypes from 'prop-types';

function ReportControl(props) {

  return(
    <div>
      <h1>Report an incident of hate.</h1>
      <h5>Current report state: {props.newReport}</h5>
    </div>
  );
}

ReportControl.propTypes = {
    newReport : PropTypes.boolean,
};

export default ReportControl;
