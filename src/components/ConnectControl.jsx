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
              <h3><strong>Services: </strong>{props.selectedServices}</h3>
              <h3><strong>Communities: </strong>{props.selectedCommunities}</h3>
              <h3><strong>Regions: </strong>{props.selectedRegions}</h3>
              <hr/>
              <ResourceCard />
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
  selectedCommunities: PropTypes.string,
  selectedServices: PropTypes.string,
  selectedRegions: PropTypes.string,
  onSelectCommunities: PropTypes.func,
  onSelectServices: PropTypes.func,
  onSelectRegions: PropTypes.func,
  onSubmitFilters: PropTypes.func,
  defaultResources: PropTypes.bool
};
export default ConnectControl;
