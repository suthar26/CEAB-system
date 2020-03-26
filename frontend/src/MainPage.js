import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
// import InputGroup from 'react-bootstrap/InputGroup';


export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseID : '',
            instructorDetails: '',
            courseCode: ''
        };
        this.textInput = React.createRef(); 

    }
    componentDidMount(){
    }
    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    loadSyllabus = () => {
        const search = this.state.courseID; 
        console.log(this.state.courseID);       
        if(this.state.courseID != null){
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

    loadCourse = () => {
        if(this.state.courseCode != null){
            fetch('/api/loadCourse')
                .then((data) => data.json())
                .then((res) => this.props.changeData(res.data))
                .then(console.log(this.props.getData));
        }
        else{
            this.props.changeData(null)
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

    loadInstructor = () => {
        if(this.state.instructorDetails != null){
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
            <div class="container" >
                <h1>Course Syllabus </h1>
                <InputGroup controlId="formControlsSelect" >
                    <FormControl 
                    name="courseID"
                    onChange={this.handleChange}
                    placeholder="Course ID"
                    aria-label="Course ID"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                    <Button variant="primary" onClick={() => this.loadSyllabus()}>Load Course</Button>
                    <Button variant="primary" onClick={() => this.loadSyllabus()}>New Course</Button>
                    </InputGroup.Append>
                </InputGroup>

                <h1>Table 3.1.2</h1>
                <InputGroup>
                    <InputGroup.Append>
                    <Button variant="primary" onClick={() => this.loadTable('Table3_1_2')}>Load Course</Button>
                    <Button variant="primary" onClick={() => this.loadTable(null)}>New Course</Button>
                    </InputGroup.Append>
                </InputGroup>

                
                <h1>Instructor Info </h1>
                <InputGroup>
                    <FormControl
                    name="instructorDetails"
                    onChange={this.handleChange}                    
                    placeholder="Instructor First & Last Name"
                    aria-label="Instructor First & Last Name"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                    <Button variant="primary" onClick={() => this.loadInstructor()}>Load Course</Button>
                    <Button variant="primary" onClick={() => this.loadInstructor()}>New Course</Button>
                    </InputGroup.Append>
                </InputGroup>

                <h1>Upload Files</h1>
                <input type="file" name="file" onChange={this.onChangeHandler}/>

                <h1>Download Files </h1>
                <InputGroup>
                    <FormControl
                    name="courseCode"
                    onChange={this.handleChange}                                        
                    placeholder="Course Code"
                    aria-label="Course Code"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                    <Button variant="primary" onClick={() => this.loadCourse()}>New Course</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        )
    }



}

        const divStyle = {
        padding: '20px'};