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
        <Navbar changeTab={this.changeTab} changeData={this.changeData} />
        {tab === 'MainPage' && <  MainPage style={divStyle} changeTab={this.changeTab}/>}
        {tab === 'CourseSyllabus' && < CourseSyllabus changeTab={this.changeTab} style={divStyle}  />}
        {/* {tab === 'Table3_1_2' && <  Table3_1_2 changeTab={this.changeTab} style={divStyle}/>} */}
        {tab === 'InstructorInfo' && <  InstructorInfo changeTab={this.changeTab} style={divStyle}/>}
        {tab === 'ContinuousImprovment' && < ContinuousImprovment changeTab={this.changeTab} style={divStyle} />}
      </div>
    );
  }
}
export default App;
