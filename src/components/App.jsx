import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from "./Header";
import Home from './Home';
import Learn from './Learn';
import Report from './Report';
import Connect from './Connect';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newReport: false,
    }
  }

  render() {
    return (
      var appStyle = {
        backgroundColor: '#f1edec',
        textAlign: 'center'
      }
      <div style={appStyle}>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/learn' component={Learn} />
          <Route path='/report' render={() =>
            <ReportControl newReport={this.state.newReport} />} />
          <Route path='/connect' component={ConnectControl} />
        </Switch>
      </div>
    );
  }
}

export default App;
