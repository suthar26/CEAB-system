//CEAB Helper app to assist with making the documents required to be an accredited for engineering
//Group 3
//3/4/20

import './App.css';
import React, { Component } from 'react';
import Navbar from './Navbar';
import MainPage from './MainPage'
import LoadDocuments from './LoadDocuments';
import CourseSyllabus from './CourseSyllabus';
import InstructorInfo from './InstructorInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContinuousImprovment from './ContinuousImprovment';

class App extends Component {

  // initialize our state
  constructor(props) {
    super(props);
    this.state = {
      tab: 'MainPage'
    };
  };

  //function that sets state of tab to given parameter
  changeTab = (newTab) => {
    this.setState({ tab: newTab })
    
  }

  //render ui
  render() {
    const { tab } = this.state;
    const divStyle = {padding: '20px'};
    return (
      <div class="body">

        {/* Chooses what component to show */}
        <Navbar changeTab={this.changeTab} changeData={this.changeData} />
        {tab === 'MainPage' && <  MainPage style={divStyle} changeTab={this.changeTab}/>}
        {tab === 'LoadDocuments' && <  LoadDocuments style={divStyle} changeTab={this.changeTab}/>}
        {tab === 'CourseSyllabus' && < CourseSyllabus changeTab={this.changeTab} style={divStyle}  />}
        {tab === 'InstructorInfo' && <  InstructorInfo changeTab={this.changeTab} style={divStyle}/>}
        {tab === 'ContinuousImprovment' && < ContinuousImprovment changeTab={this.changeTab} style={divStyle} />}
      </div>
    );
  }
}
export default App;
