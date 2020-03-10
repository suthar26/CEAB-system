import './App.css';
import React, { Component } from 'react';
import Navbar from './Navbar';
import CourseSyllabus from './CourseSyllabus';
import InstrcutorInfo from './InstructorInfo';
import Table3_1_2 from './Table3_1_2';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  // initialize our state
  state = {
    tab: 'CourseSyllabus'
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
      <div>
        <Navbar changeTab={this.changeTab} />
        {tab === 'CourseSyllabus' && < CourseSyllabus style={divStyle}/>}
        {tab === 'Table3_1_2' && <  Table3_1_2 style={divStyle}/>}
        {tab === 'InstructorInfo' && <  InstrcutorInfo style={divStyle}/>}
      </div>
    );
  }
}
export default App;
