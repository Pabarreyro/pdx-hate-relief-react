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
        onSubmitFilters={this.handleSubmitFilters}/>
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
  onSubmitFilters: PropTypes.func
};
export default ConnectControl;
