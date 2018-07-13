import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function ReportControl(props) {

  return(
    <div>
      { props.newReport ?
        <h1>Continue report</h1>
        : <Button onClick={props.onStartReport}>Start Report</Button>
      }
    </div>
  );
}

ReportControl.propTypes = {
  newReport : PropTypes.boolean,
  onStartReport : PropTypes.func
};

export default ReportControl;
