import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function ReportControl(props) {
  let currentView = null;

  if (!props.newReport) {
    currentView = <Button onClick={props.onStartReport}>Start Report</Button>;
  } else {
    currentView = <h1>Continue report</h1>;
  }
  return(
    <div>
      {currentView}
    </div>
  );
}

ReportControl.propTypes = {
  newReport : PropTypes.boolean,
  onStartReport : PropTypes.func
};

export default ReportControl;
