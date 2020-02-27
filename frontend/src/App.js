import React from 'react';
import logo from './logo.svg';
import './App.css';
import CourseSyllabus from './CourseSyllabus';
import InstrcutorInfo from './InstructorInfo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CourseSyllabus />
        <InstrcutorInfo />
      </header>
    </div>
  );
}

export default App;
