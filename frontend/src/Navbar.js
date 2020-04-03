//CEAB Helper app to assist with making the documents required to be an accredited for engineering
//Group 3
//3/4/20

import React from 'react';

//Renders navbar
class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar-expand-lg navbar navbar-dark bg-dark">
                <div class="navbar-brand">CEAB System</div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbar">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link" href='#' onClick={() => {this.props.changeTab('MainPage')}}>Main Page</a>
                        <a class="nav-item nav-link" href='#' onClick={() => {this.props.changeTab('LoadDocuments')}}>Load Documents</a>
                        <a class="nav-item nav-link" href='#' onClick={() => {this.props.changeTab('CourseSyllabus')}}>Course Syllabus</a>
                        <a class="nav-item nav-link" href='#' onClick={() => {this.props.changeTab('InstructorInfo')}}>Instructor Info</a>
                        <a class="nav-item nav-link" href='#' onClick={() => {this.props.changeTab('ContinuousImprovment')}}>Continuous Improvment</a>
                    </div>
                </div>
            </nav>
        )
    }
};

export default Navbar;