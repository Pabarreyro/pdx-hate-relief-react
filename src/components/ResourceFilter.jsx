import React from 'react';
import PropTypes from 'prop-types';

import { Jumbotron, Row, Col, Button } from 'react-bootstrap';
import Select from 'react-select';
import '!style-loader!css-loader!react-select/dist/react-select.css';

function ResourceFilter(props) {

  return(
    <div>
      <style jsx>
        {`
          .connect-header {
            text-align: center;
          }

          .form-label {
            text-align: center;
          }
        `}
      </style>
      <Jumbotron>
        <div>
          <div className="connect-header">
            <h1>Helping Portland heal from hate</h1>
            <p>Connect with organizations across Portland who are helping communities heal from and prevent hate crimes.</p>
          </div>
          <div>
            <Row>
              <Col md={3}>
                <div className="form-label">
                  <label for="communities"> I am </label>
                </div>
                <Select
                  name="communities"
                  placeholder="Select all that apply"
                  value={props.selectedCommunities}
                  onChange={props.onSelectCommunities}
                  options={props.communities}
                  multi={true}
                  removeSelected={true}
                  closeOnSelect={false} >
                </Select>
              </Col>
              <Col md={3}>
                <div className="form-label">
                  <label for="services">Looking for</label>
                </div>
                <Select
                  name="services"
                  placeholder="Select all that apply"
                  value={props.selectedServices}
                  onChange={props.onSelectServices}
                  options={props.services}
                  multi={true}
                  removeSelected={true}
                  closeOnSelect={false} >
                </Select>
              </Col>
              <Col md={3}>
                <div className="form-label">
                  <label for="regions">In</label>
                </div>
                <Select
                  name="regions"
                  placeholder="Select all that apply"
                  value={props.selectedRegions}
                  onChange={props.onSelectRegions}
                  options={props.regions}
                  multi={true}
                  removeSelected={true}
                  closeOnSelect={false} >
                </Select>
              </Col>
              <Col md={3}>
                <Button onClick={props.onSubmitFilters}>Find Resources</Button>
              </Col>
            </Row>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
}

ResourceFilter.propTypes = {
  regions: PropTypes.array.isRequired,
  services: PropTypes.array.isRequired,
  communities: PropTypes.array.isRequired,
  selectedCommunities: PropTypes.string,
  selectedServices: PropTypes.string,
  selectedRegions: PropTypes.string,
  onSelectCommunities: PropTypes.func,
  onSelectServices: PropTypes.func,
  onSelectRegions: PropTypes.func,
  onSubmitFilters: PropTypes.func
};

export default ResourceFilter;
