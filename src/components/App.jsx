import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from "./Header";
import Home from './Home';
import Learn from './Learn';
import Report from './Report';
import Connect from './Connect';

function App(){
  var appStyle = {
    backgroundColor: '#f1edec',
    textAlign: 'center'
  }
  return (
    <div style={appStyle}>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/learn' component={Learn} />
        <Route path='/report' component={Report} />
        <Route path='/connect' component={Connect} />
      </Switch>
    </div>
  );
}

export default App;
