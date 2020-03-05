import React from 'react';
import logo from './logo.svg';
import './App.css';
import CourseSyllabus from './CourseSyllabus';
import InstrcutorInfo from './InstructorInfo';
import Table3_1_2 from './Table3_1_2';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
const divStyle = {
padding: '20px'};
  return (
    <div className="App">
        < CourseSyllabus style={divStyle}/>
        <  InstrcutorInfo style={divStyle}/>
        <  Table3_1_2 style={divStyle}/>
    </div>
  );
}

export default App;
