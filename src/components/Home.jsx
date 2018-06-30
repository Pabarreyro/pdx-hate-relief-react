import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

import HomePanel from './HomePanel';
import puahLogo from '../assets/images/puah_logo.jpg';

const homePanelCopy = [
  {
    heading: 'Data About As, By Us',
    lead: 'This site is a resource for individuals and communities in Portland seeking to heal from, respond to and prevent hateful acts.',
    action: 'learn more',
    actionRoute: '/learn'
  },
  {
    heading: 'Witness or experience a hate incident?',
    lead: 'Report it online or get connected with a <code>PUAH <a href="https://www.portlandoregon.gov/oni/72583">partner</a></code> and report in person. Tell us only what you want to, it\'s all confidential',
    action: 'Report an Incident',
    actionRoute: '/report'
  }
]

function Home() {
  return (
    <Col md={12} sm={10} container={true}>
      <a href="https://www.portlandoregon.gov/oni/72583">
        <img src={puahLogo} style={{height: 150, width: 150, marginBottom: '2rem', borderRadius: '0.5rem'}}/>
      </a>
      { homePanelCopy.map((panel, i) =>
          <HomePanel
            heading={panel.heading}
            lead={panel.lead}
            action={panel.action}
            actionRoute={panel.actionRoute}
            key={i}/>
        )}
    </Col>
  );
}

export default Home;
