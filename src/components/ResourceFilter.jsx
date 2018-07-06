import React from 'react';
import PropTypes from 'prop-types';

import { Jumbotron, Button } from 'react-bootstrap';
import Select from 'react-select';

function ResourceFilter(props) {

  return(
    <div>
      <style jsx>
        {`
          Jumbotron {
            text-align: center;
          }
        `}
      </style>
      <Jumbotron>
        <div>
          <h1>Helping Portland heal from hate</h1>
          <p>Connect with organizations across Potland who are helping communities heal from and prevent hate crimes.</p>
          <div className="resource-search">
            <div>
              <div md={3}>
                <label for="communities"> I am </label>
                <Select
                  name="communities"
                  value={props.selectedCommunities}
                  onChange={onSelectCommunities}
                  options={props.communities} />
                </Select>
              </div>
              <div md={3}>
                <label for="services">Looking for</label>
                <Select
                  [name="services"
                  value={props.selectedServices}
                  onChange={onSelectServices}
                  options={props.services} />
                </Select>
              </div>
              <div md={3}>
                <label for="regions">In</label>
                <Select
                  name="regions"
                  value={props.selectedRegions}
                  onChange={onSelectRegions}
                  options={props.Regions} />
                </Select>
              </div>
              <Button>Find Resources</Button>
            </div>
          </div>
        </div>
      </Jumbotron>
    </div>

  )
}

ResourceFilter.propTypes = {
    regions = PropTypes.array.isRequired,
    services = PropTypes.array.isRequired,
    communities = PropTypes.array.isRequired,
    selectedCommunities = PropTypes.string,
    selectedServices = PropTypes.string,
    selectedRegions = PropTypes.string,
    onSelectCommunities = PropTypes.func,
    onSelectServices = PropTypes.func,
    onSelectRegions = PropTypes.func
}

export default ResourceFilter;
