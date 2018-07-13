import React from 'react';
import PropTypes from 'prop-types';
import ResourceFilter from './ResourceFilter';
import ResourceCard from './ResourceCard';

function ConnectControl(props) {
  return(
    <div>
      <ResourceFilter
        regions={props.regions}
        communities={props.communities}
        services={props.services}
        onSelectCommunities={props.onSelectCommunities}
        onSelectServices={props.onSelectServices}
        onSelectRegions={props.onSelectRegions}
        onSubmitFilters={props.onSubmitFilters} />
      <div>
        {
          props.defaultResources ? (
            <h4>Try Selecting search critera</h4>
          ) : (
            <div>
              <h1>Great! I see you've selected the following filter criteria:</h1>
              <h3><strong>Services: </strong></h3>
              <h5>{props.selectedServices[0].value} </h5>
              <h3><strong>Communities: </strong></h3>
              <h5>{props.selectedCommunities[0].value} </h5>
              <h3><strong>Regions: </strong></h3>
              <h5>{props.selectedRegions[0].value} </h5>

              <hr/>
              <ResourceCard
                selectedServices={props.selectedServices}
                selectedRegions={props.selectedRegions}
                selectedCommunities={props.selectedCommunities} />
            </div>
          )
        }
      </div>
    </div>
  );
}

ConnectControl.propTypes = {
  resources: PropTypes.object,
  services: PropTypes.array,
  communities: PropTypes.array,
  regions: PropTypes.array,
  selectedCommunities: PropTypes.array,
  selectedServices: PropTypes.array,
  selectedRegions: PropTypes.array,
  onSelectCommunities: PropTypes.func,
  onSelectServices: PropTypes.func,
  onSelectRegions: PropTypes.func,
  onSubmitFilters: PropTypes.func,
  defaultResources: PropTypes.bool
};
export default ConnectControl;
