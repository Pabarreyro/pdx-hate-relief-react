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
      services: [
        { id: 1, name: 'Safe space', value: 'Safe space' },
        { id: 2, name: 'Support groups & community gatherings', value: 'Support groups & community gatherings' },
        { id: 3, name: 'Immigration assistance', value: 'Immigration assistance' },
        { id: 4, name: 'Financial assistance', value: 'Financial assistance' },
        { id: 5, name: 'Legal assistance', value: 'Legal assistance' },
        { id: 6, name: 'Counseling & health services', value: 'Counseling & health services' },
        { id: 7, name: 'Language services', value: 'Language services' },
        { id: 8, name: 'Advocacy & community action opportunities', value: 'Advocacy & community action opportunities' },
        { id: 9, name: 'Educational resources', value: 'Educational resources' },
        { id: 10, name: 'Training & leadership development', value: 'Training & leadership development' }
      ],
      regions: [
        { id: 1, name: 'All Areas', value: 'All Areas' },
        { id: 2, name: 'North Portland (west of I-5)', value: 'North Portland (west of I-5)' },
        { id: 3, name: 'Northeast Portland (west of I-205)', value: 'Northeast Portland (west of I-205)' },
        { id: 4, name: 'Northeast Portland (east of I-205)', value: 'Northeast Portland (east of I-205)' },
        { id: 5, name: 'Southeast Portland (west of I-205)', value: 'Southeast Portland (west of I-205)' },
        { id: 6, name: 'Southeast Portland (east of I-205)', value: 'Southeast Portland (east of I-205)' },
        { id: 7, name: 'Downtown Portland (inside I-405 loop)', value: 'Downtown Portland (inside I-405 loop)' },
        { id: 8, name: 'Northwest Portland (outside of I-405 loop)', value: 'Northwest Portland (outside of I-405 loop)' },
        { id: 9, name: 'Southwest (outside of I-405 loop)', value: 'Southwest (outside of I-405 loop)' }
      ],
      communities: [
        { id: 1, name: 'LGBTQ2SIA+', value: 'LGBTQ2SIA+' },
        { id: 2, name: 'Female', value: 'Female' },
        { id: 3, name: 'Gender Expansive', value: 'Gender Expansive' },
        { id: 4, name: 'Gender Fluid', value: 'Gender Fluid' },
        { id: 5, name: 'Gender Nonconforming', value: 'Gender Nonconforming' },
        { id: 6, name: 'Genderqueer', value: 'Genderqueer' },
        { id: 7, name: 'Non-binary', value: 'Non-binary' },
        { id: 8, name: 'Male', value: 'Male' },
        { id: 9, name: 'Questioning', value: 'Questioning' },
        { id: 10, name: 'Trans female', value: 'Trans female' },
        { id: 11, name: 'Trans male', value: 'Trans male' },
        { id: 12, name: 'Two-spirit', value: 'Two-spirit' },
        { id: 13, name: 'Black', value: 'Black' },
        { id: 14, name: 'African American', value: 'African American' },
        { id: 15, name: 'African', value: 'African' },
        { id: 16, name: 'Caribbean', value: 'Caribbean' },
        { id: 17, name: 'Asian', value: 'Asian' },
        { id: 18, name: 'Chinese', value: 'Chinese' },
        { id: 19, name: 'Filipino/a', value: 'Filipino/a' },
        { id: 20, name: 'Hmong', value: 'Hmong' },
        { id: 21, name: 'Japanese', value: 'Japanese' },
        { id: 22, name: 'Korean', value: 'Korean' },
        { id: 23, name: 'Laotian', value: 'Laotian' },
        { id: 24, name: 'South Asian', value: 'South Asian' },
        { id: 25, name: 'Vietnamese', value: 'Vietnamese' },
        { id: 26, name: 'Latino/a/x', value: 'Latino/a/x' },
        { id: 27, name: 'Latino/a/x Mexican', value: 'Latino/a/x Mexican' },
        { id: 28, name: 'Latino/a/x Central American', value: 'Latino/a/x Central American' },
        { id: 29, name: 'Hawaiian/Pacific Islander', value: 'Hawaiian/Pacific Islander'}
        { id: 30, name: 'Micronesian', value: 'Micronesian' },
        { id: 31, name: 'Native Hawaiian', value: 'Native Hawaiian' },
        { id: 32, name: 'Guamanian or Chamorro', value: 'Guamanian or Chamorro' },
        { id: 33, name: 'Samoan', value: 'Samoan' },
        { id: 34, name: 'Native American', value: 'Native American' },
        { id: 35, name: 'Alaskan Native', value: 'Alaskan Native' },
        { id: 36, name: 'Middle Eastern', value: 'Middle Eastern' },
        { id: 37, name: 'White/European', value: 'White/European' },
        { id: 38, name: 'Eastern European', value: 'Eastern European' },
        { id: 39, name: 'Slavic', value: 'Slavic' },
        { id: 40, name: 'Western European', value: 'Western European' },
        { id: 41, name: 'Youth', value: 'Youth' },
        { id: 42, name: 'Homeless', value: 'Homeless' }
      ],
      selectedCommunities: '',
      selectedServices: '',
      selectedRegions: ''
    };
    this.handleStartReport = this.handleStartReport.bind(this);
    this.handleSelectCommunities = this.handleSelectCommunities.bind(this);
    this.handleSelectServices = this.handleSelectServices.bind(this);
    this.handleSelectRegions = this.handleSelectRegions.bind(this);
  }

  handleStartReport() {
    this.setState({ newReport : true});
  }

  handleSelectRegions() {

  }

  handleSelectServices() {

  }

  handleSelectCommunities() {

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
