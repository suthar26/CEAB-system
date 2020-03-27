import './App.css';
import React, { Component } from 'react';
import Navbar from './Navbar';
import MainPage from './MainPage';
import CourseSyllabus from './CourseSyllabus';
import InstructorInfo from './InstructorInfo';
import Table3_1_2 from './Table3_1_2';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContinuousImprovment from './ContinuousImprovment';

class App extends Component {

  // initialize our state
  state = {
    tab: 'MainPage',
    data: {}
  };

  //function that sets state of tab to given parameter
  changeTab = (newTab) => {
    this.setState({ tab: newTab })
  }

  changeData = (data) => {
    this.setState({ data: data })
  }

  getData = () => {
    return this.state.data
  }

  //render ui
  render() {
    const { tab, data } = this.state;
    const divStyle = {padding: '20px'};
    return (
      <div class="body">
        <Navbar changeTab={this.changeTab} changeData={this.changeData} />
        {tab === 'MainPage' && <  MainPage style={divStyle} changeTab={this.changeTab} changeData={this.changeData}/>}
        {tab === 'CourseSyllabus' && < CourseSyllabus style={divStyle} getData={this.getData} />}
        {tab === 'Table3_1_2' && <  Table3_1_2 style={divStyle}/>}
        {tab === 'InstructorInfo' && <  InstructorInfo style={divStyle}/>}
        {tab === 'ContinuousImprovment' && < ContinuousImprovment style={divStyle} getData={this.getData} />}
      </div>
    );
  }
}
export default App;
