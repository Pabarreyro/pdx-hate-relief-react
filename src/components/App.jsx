import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from "./Header";
import Home from './Home';
import Learn from './Learn';
import ReportControl from './ReportControl';
import ConnectControl from './ConnectControl';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newReport: false,
    }
  }

  render() {
    return (
      <div className="main">
        <style jsx>{`
            .main {
              background-color: #f1edec;
              text-align: center;
            }`}</style>
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
