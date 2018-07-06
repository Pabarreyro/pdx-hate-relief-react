import React from 'react';
import PropTypes from 'prop-types';
import ResourceFilter from './ResourceFilter';
import ResourceCard from './ResourceCard';

function ConnectControl(props) {
  return(
    <div>
      <ResourceFilter
        regions={props.regions}
        comunities={props.comunities}
        services={props.services}/>
    </div>
  );
}

ConnectControl.propTypes = {
  resources: PropTypes.object,
  services: PropTypes.array,
  communities: PropTypes.array,
  regions: PropTypes.array
}
export default ConnectControl;
