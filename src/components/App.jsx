import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Learn from './Learn';
import ReportControl from './ReportControl';
import ConnectControl from './ConnectControl';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newReport: false,
      masterResources: {},
      services: [
        { id: 1, label: 'Safe space', value: 'Safe space' },
        { id: 2, label: 'Support groups & community gatherings', value: 'Support groups & community gatherings' },
        { id: 3, label: 'Immigration assistance', value: 'Immigration assistance' },
        { id: 4, label: 'Financial assistance', value: 'Financial assistance' },
        { id: 5, label: 'Legal assistance', value: 'Legal assistance' },
        { id: 6, label: 'Counseling & health services', value: 'Counseling & health services' },
        { id: 7, label: 'Language services', value: 'Language services' },
        { id: 8, label: 'Advocacy & community action opportunities', value: 'Advocacy & community action opportunities' },
        { id: 9, label: 'Educational resources', value: 'Educational resources' },
        { id: 10, label: 'Training & leadership development', value: 'Training & leadership development' },
      ],
      regions: [
        { id: 1, label: 'All Areas', value: 'All Areas' },
        { id: 2, label: 'North Portland (west of I-5)', value: 'North Portland (west of I-5)' },
        { id: 3, label: 'Northeast Portland (west of I-205)', value: 'Northeast Portland (west of I-205)' },
        { id: 4, label: 'Northeast Portland (east of I-205)', value: 'Northeast Portland (east of I-205)' },
        { id: 5, label: 'Southeast Portland (west of I-205)', value: 'Southeast Portland (west of I-205)' },
        { id: 6, label: 'Southeast Portland (east of I-205)', value: 'Southeast Portland (east of I-205)' },
        { id: 7, label: 'Downtown Portland (inside I-405 loop)', value: 'Downtown Portland (inside I-405 loop)' },
        { id: 8, label: 'Northwest Portland (outside of I-405 loop)', value: 'Northwest Portland (outside of I-405 loop)' },
        { id: 9, label: 'Southwest (outside of I-405 loop)', value: 'Southwest (outside of I-405 loop)' },
      ],
      communities: [
        { id: 1, label: 'LGBTQ2SIA+', value: 'LGBTQ2SIA+' },
        { id: 2, label: 'Female', value: 'Female' },
        { id: 3, label: 'Gender Expansive', value: 'Gender Expansive' },
        { id: 4, label: 'Gender Fluid', value: 'Gender Fluid' },
        { id: 5, label: 'Gender Nonconforming', value: 'Gender Nonconforming' },
        { id: 6, label: 'Genderqueer', value: 'Genderqueer' },
        { id: 7, label: 'Non-binary', value: 'Non-binary' },
        { id: 8, label: 'Male', value: 'Male' },
        { id: 9, label: 'Questioning', value: 'Questioning' },
        { id: 10, label: 'Trans female', value: 'Trans female' },
        { id: 11, label: 'Trans male', value: 'Trans male' },
        { id: 12, label: 'Two-spirit', value: 'Two-spirit' },
        { id: 13, label: 'Black', value: 'Black' },
        { id: 14, label: 'African American', value: 'African American' },
        { id: 15, label: 'African', value: 'African' },
        { id: 16, label: 'Caribbean', value: 'Caribbean' },
        { id: 17, label: 'Asian', value: 'Asian' },
        { id: 18, label: 'Chinese', value: 'Chinese' },
        { id: 19, label: 'Filipino/a', value: 'Filipino/a' },
        { id: 20, label: 'Hmong', value: 'Hmong' },
        { id: 21, label: 'Japanese', value: 'Japanese' },
        { id: 22, label: 'Korean', value: 'Korean' },
        { id: 23, label: 'Laotian', value: 'Laotian' },
        { id: 24, label: 'South Asian', value: 'South Asian' },
        { id: 25, label: 'Vietnamese', value: 'Vietnamese' },
        { id: 26, label: 'Latino/a/x', value: 'Latino/a/x' },
        { id: 27, label: 'Latino/a/x Mexican', value: 'Latino/a/x Mexican' },
        { id: 28, label: 'Latino/a/x Central American', value: 'Latino/a/x Central American' },
        { id: 29, label: 'Hawaiian/Pacific Islander', value: 'Hawaiian/Pacific Islander'},
        { id: 30, label: 'Micronesian', value: 'Micronesian' },
        { id: 31, label: 'Native Hawaiian', value: 'Native Hawaiian' },
        { id: 32, label: 'Guamanian or Chamorro', value: 'Guamanian or Chamorro' },
        { id: 33, label: 'Samoan', value: 'Samoan' },
        { id: 34, label: 'Native American', value: 'Native American' },
        { id: 35, label: 'Alaskan Native', value: 'Alaskan Native' },
        { id: 36, label: 'Middle Eastern', value: 'Middle Eastern' },
        { id: 37, label: 'White/European', value: 'White/European' },
        { id: 38, label: 'Eastern European', value: 'Eastern European' },
        { id: 39, label: 'Slavic', value: 'Slavic' },
        { id: 40, label: 'Western European', value: 'Western European' },
        { id: 41, label: 'Youth', value: 'Youth' },
        { id: 42, label: 'Homeless', value: 'Homeless' },
      ],
      selectedCommunities: [],
      selectedServices: [],
      selectedRegions: [],
      defaultResources: true
    };
    this.handleStartReport = this.handleStartReport.bind(this);
    this.handleSelectCommunities = this.handleSelectCommunities.bind(this);
    this.handleSelectServices = this.handleSelectServices.bind(this);
    this.handleSelectRegions = this.handleSelectRegions.bind(this);
    this.handleSubmitFilters = this.handleSubmitFilters.bind(this);
  }

  handleStartReport() {
    this.setState({ newReport : true});
  }

  handleSelectRegions(selectedRegions) {
    this.setState({ selectedRegions: selectedRegions },
      this.consoleLogState);
  }

  handleSelectServices(selectedServices) {
    this.setState({ selectedServices: selectedServices },
      this.consoleLogState);
  }

  handleSelectCommunities(selectedCommunities) {
    this.setState({ selectedCommunities: selectedCommunities }, this.consoleLogState);
  }

  handleSubmitFilters() {
    this.setState({ defaultResources: false }, this.consoleLogState);
  }

  consoleLogState() {
    console.log(this.state.selectedRegions);
    console.log(this.state.selectedServices);
    console.log(this.state.selectedCommunities);
    console.log(this.state.defaultResources);
  }

  render() {
    return (
      <div className="main">
        <style jsx>{`
            .main {
              background-color: #f1edec;
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
              regions={this.state.regions}
              selectedServices={this.state.selectedServices}
              selectedRegions={this.state.selectedRegions}
              selectedCommunities={this.state.selectedCommunities}
              onSelectCommunities={this.handleSelectCommunities}
              onSelectServices={this.handleSelectServices}
              onSelectRegions={this.handleSelectRegions}
              onSubmitFilters={this.handleSubmitFilters}
              defaultResources={this.state.defaultResources} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
