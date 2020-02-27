import React from 'react';
import logo from './logo.svg';
import './App.css';
import CourseSyllabus from './CourseSyllabus';
import InstrcutorInfo from './InstructorInfo';

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
