import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function ReportControl(props) {

  return(
    <div>
      { props.newReport ?
        (props.currentReportSection === 1) ? (
            <div>
              <h1>About Me</h1>
              <Button onClick={props.onAdvanceSection}>Save & Continue</Button>
            </div>
          ) :
        (props.currentReportSection === 2) ? (
            <div>
              <h1>Time + Place</h1>
              <Button onClick={props.onAdvanceSection}>Save & Continue</Button>
            </div>
          ) :
        (props.currentReportSection === 3) ? (
            <div>
              <h1>Incident Details</h1>
              <Button onClick={props.onAdvanceSection}>Save & Continue</Button>
            </div>
          ) :
        (props.currentReportSection === 4) ? (
            <div>
              <h1>Additional Info</h1>
              <Button onClick={props.onAdvanceSection}>Save & Continue</Button>
            </div>
          ) :
        <h1>Review</h1>
        : <Button onClick={props.onStartReport}>Start Report</Button>
      }
    </div>
  );
}

ReportControl.propTypes = {
  newReport : PropTypes.bool,
  currentReportSection: PropTypes.number,
  onStartReport : PropTypes.func,
  onAdvanceSection : PropTypes.func
};

export default ReportControl;
