import React from 'react';
import PropTypes from 'prop-types';

function ReportControl(props) {
  let currentView = null;

  if (!props.newReport) {
    currentView = <h1>Start a report</h1>
  } else {
    currentView = <h1>Continue report</h1>
  }
  return(
    <div>
      {currentView}
    </div>
  );
}

ReportControl.propTypes = {
    newReport : PropTypes.boolean,
};

export default ReportControl;
