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
      masterResources: {

      },
      services: [],
      regions: [],
      communities: []
    };
    this.handleStartReport = this.handleStartReport.bind(this);
  }

  handleStartReport() {
    this.setState({ newReport : true});
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
            <ReportControl
              newReport={this.state.newReport}
              onStartReport={this.handleStartReport} />} />
          <Route path='/connect' render={() =>
            <ConnectControl
              resources={this.state.masterResources}
              services={this.state.services}
              communities={this.state.communities}
              regions={this.state.regions} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
