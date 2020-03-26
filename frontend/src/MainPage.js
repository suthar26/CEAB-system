import React from 'react';
import axios from 'axios';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    loadSyllabus = (search) => {
        if(search != null){
            fetch('/api/loadSyllabus')
                .then((data) => data.json())
                .then((res) => this.props.changeData(res.data))
                .then(this.props.changeTab('CourseSyllabus'))
                .then(console.log(this.props.getData));
        }
        else{
            this.props.changeData(null)
            this.props.changeTab('CourseSyllabus')
        }

    };

    loadTable = (search) => {
        if(search != null){
            fetch('/api/loadTable')
                .then((data) => data.json())
                .then((res) => this.props.changeData(res.data))
                .then(this.props.changeTab('Table3_1_2'))
                .then(console.log(this.props.getData));
        }
        else{
            this.props.changeData(null)
            this.props.changeTab('Table3_1_2')
        }

    };

    loadInstructor = (search) => {
        if(search != null){
            fetch('/api/loadInstructor')
                .then((data) => data.json())
                .then((res) => this.props.changeData(res.data))
                .then(this.props.changeTab('InstructorInfo'))
                .then(console.log(this.props.getData));
        }
        else{
            this.props.changeData(null)
            this.props.changeTab('InstructorInfo')
        }

    };

    render() {
        return (
            <div>
                <h1>Course Syllabus</h1>
                <input id="searchSyllabus" placeholder="Course ID" type="text" />
                <button onClick={() => this.loadSyllabus(document.getElementById("searchSyllabus").value)}>Load Course</button>
                <button onClick={() => this.loadSyllabus(null)}>New Course</button>
                <h1>Table 3.1.2</h1>
                <button onClick={() => this.loadTable('Table3_1_2')}>Load Course</button>
                <button onClick={() => this.loadTable(null)}>New Course</button>
                <h1>Instructor Info</h1>
                <input id="searchInstructor" placeholder="Instructor First & Last Name" type="text" />
                <button onClick={() => this.loadInstructor(document.getElementById("searchInstructor").value)}>Load Course</button>
                <button onClick={() => this.loadInstructor(null)}>New Course</button>
            </div>
        )
    }



}

        const divStyle = {
        padding: '20px'};