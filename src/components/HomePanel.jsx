import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Jumbotron, Button } from 'react-bootstrap';

function HomePanel(props) {
  return(
    <Jumbotron>
      <div>
        <h1>{props.heading}</h1>
        <p>{props.lead}</p>
        <hr/>
        <div>
          <Link to={props.actionRoute}>
            <Button bsStyle="primary">{props.action}</Button>
          </Link>
        </div>
      </div>
    </Jumbotron>
  );
}

HomePanel.propTypes = {
  heading: PropTypes.string,
  lead: PropTypes.string,
  action: PropTypes.string,
  actionRoute: PropTypes.string
};


export default HomePanel;
