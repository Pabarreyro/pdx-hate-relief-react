import React from 'react';
import PropTypes from "prop-types";

import { Jumbotron, Button } from 'react-bootstrap';

function HomePanel(props) {
  return(
    <Jumbotron>
      <div>
        <h1 class="jumbotron-heading">{props.heading}</h1>
        <p class="lead">{props.lead}</p>
        <hr>
        <div>
          <Link to={props.actionRoute}
            <Button bsStyle="primary">{props.action}</Button>
          </Link>
        </div>
      </div>
    </Jumbotron>
  );
}
