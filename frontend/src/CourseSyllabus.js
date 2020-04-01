import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';


export default class CourseSyllabus extends React.Component {
    constructor(props) {
        super(props);
        let variable = this.props.data;

        this.state = {
            load: '',
            courseName: '',
            courseYear: '',
            courseCode: '',
            instructorName: '',
            lecHours: '',
            tutHours: '',
            labHours: '',
            courseDescription: '',
            knowledgeGA: '',
            problemGA: '',
            investigationGA: '',
            designGA: '',
            engineeringToolsGA: '',
            individualGA: '',
            communicationGA: '',
            professionalismGA: '',
            environmentGA: '',
            ethicsGA: '',
            economicsGA: '',
            learningGA: '',
            mathPerct: '',
            basicSciPerct: '',
            studiesPerct: '',
            engSciPerct: '',
            engDesignPerct: ''
        };
        this.handleChange = this.change.bind(this);
        this.handleSubmit = this.onSubmit.bind(this);
    }

    //gets the values entered by user and set it state variables above
    change = e => {
        this.setState(
            { [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        axios.post('/api/submitSyllabus', {
            courses: this.state
        }).then(alert("Saved"));
        this.props.changeTab('MainPage');

    };

    setLoadValues = (values) => {
        for (const value of Object.keys(this.state)) {
            if(value!= 'load'){
            this.setState({[value]:values[value]});
            }
          }
          console.log(this.state);
    }

    loadSyllabus = () => {
        if (this.state.load) {
            fetch('/api/loadSyllabus?courseID=' + this.state.load)
                .then((data) => data.json())
                .then((res) => this.setLoadValues(res.data))
        }
    };


    render() {
        return (
            <div class="container">
                <InputGroup controlId="formControlsSelect" >
                    <FormControl
                        name="load"
                        onChange={this.handleChange}
                        placeholder="Course Code"
                        aria-label="Course Code"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="primary" onClick={() => this.loadSyllabus()}>Load Course</Button>
                    </InputGroup.Append>
                </InputGroup>
                <Form autoComplete="on" onSubmit={this.handleSubmit}>
                    <h1>Course Syllabus</h1>
                    <br />
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCourseName">
                            <Form.Label><b>Course Name</b></Form.Label>
                            <Form.Control type="text" name="courseName" value={this.state.courseName} placeholder="Enter Course Name" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCourseYear">
                            <Form.Label><b>Course Year</b></Form.Label>
                            <Form.Control type="number" name="courseYear" value={this.state.courseYear} min="2000" placeholder="Enter Course Year" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCourseCode">
                            <Form.Label><b>Course Code</b></Form.Label>
                            <Form.Control type="text" name="courseCode" value={this.state.courseCode} placeholder="Enter Course Code" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridInstructorName">
                            <Form.Label><b>Instructor Name</b></Form.Label>
                            <Form.Control type="text" name="instructorName" value={this.state.instructorName} placeholder="Enter First & Last Name" onChange={this.handleChange} />
                        </Form.Group>
                    </Form.Row>
                    <br />
                    <Form.Group controlId="formGridLecture">
                        <Form.Label><b>Lecture Hours</b></Form.Label>
                        <Form.Control type="number" name="lecHours" value={this.state.lecHours} min="1" step="any" placeholder="Enter Lecture hours per week" onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formGridTutorial">
                        <Form.Row>
                            <Form.Label><b>Tutorial Hours -</b></Form.Label>
                            <p>Enter 0 if no Tutorial</p>
                        </Form.Row>
                        <Form.Control type="number" name="tutHours" value={this.state.tutHours} min="0" placeholder="Enter Tutorial hours per week" onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formGridLab">
                        <Form.Row>
                            <Form.Label><b>Lab Hours -</b></Form.Label>
                            <p>Enter 0 if no Lab</p>
                        </Form.Row>
                        <Form.Control type="number" name="labHours" value={this.state.labHours} min="0" placeholder="Enter Lab hours per week" onChange={this.handleChange} />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formGridDescription">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text><b>Course Description</b></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl as="textarea" name="courseDescription" value={this.state.courseDescription} aria-label="With textarea" onChange={this.handleChange} />
                        </InputGroup>
                    </Form.Group>
                    <br />

                    <Form.Group id="formGridRadiobox">
                        <Form.Label><b>Grading Attributes Used in Course</b></Form.Label>
                        <p><small>Select all that apply</small></p>
                        <Table variant="dark">
                            <thead>
                                <tr>
                                    <th>Attributes</th>
                                    <th colSpan="3"><center>Levels</center></th>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th><center>Introductory</center></th>
                                    <th><center>Intermediate</center></th>
                                    <th><center>Advanced</center></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Knowledge Base</td>
                                    <td><center><Form.Check type="radio" name="knowledgeGA" checked={this.state.knowledgeGA == 'introductory'} value="introductory" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="knowledgeGA" checked={this.state.knowledgeGA == 'intermediate'} value="intermediate" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="knowledgeGA" checked={this.state.knowledgeGA == 'advanced'} value="advanced" onChange={this.handleChange} /></center></td>
                                </tr>
                                <tr>
                                    <td>Problem Analysis</td>
                                    <td><center><Form.Check type="radio" name="problemGA" checked={this.state.problemGA == 'introductory'} value="introductory" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="problemGA" checked={this.state.problemGA == 'intermediate'} value="intermediate" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="problemGA" checked={this.state.problemGA == 'advanced'} value="advanced" onChange={this.handleChange} /></center></td>
                                </tr>
                                <tr>
                                    <td>Investigation</td>
                                    <td><center><Form.Check type="radio" name="investigationGA" checked={this.state.investigationGA == 'introductory'} value="introductory" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="investigationGA" checked={this.state.investigationGA == 'intermediate'} value="intermediate" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="investigationGA" checked={this.state.investigationGA == 'advanced'} value="advanced" onChange={this.handleChange} /></center></td>
                                </tr>
                                <tr>
                                    <td>Design</td>
                                    <td><center><Form.Check type="radio" name="designGA" checked={this.state.designGA == 'introductory'} value="introductory" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="designGA" checked={this.state.designGA == 'intermediate'} value="intermediate" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="designGA" checked={this.state.designGA == 'advanced'} value="advanced" onChange={this.handleChange} /></center></td>
                                </tr>
                                <tr>
                                    <td>Use of Engineering Tools</td>
                                    <td><center><Form.Check type="radio" name="engineeringToolsGA" checked={this.state.engineeringToolsGA == 'introductory'} value="introductory" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="engineeringToolsGA" checked={this.state.engineeringToolsGA == 'intermediate'} value="intermediate" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="engineeringToolsGA" checked={this.state.engineeringToolsGA == 'advanced'} value="advanced" onChange={this.handleChange} /></center></td>
                                </tr>
                                <tr>
                                    <td>Individual and Team Work</td>
                                    <td><center><Form.Check type="radio" name="individualGA" checked={this.state.individualGA == 'introductory'} value="introductory" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="individualGA" checked={this.state.individualGA == 'intermediate'} value="intermediate" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="individualGA" checked={this.state.individualGA == 'advanced'} value="advanced" onChange={this.handleChange} /></center></td>
                                </tr>
                                <tr>
                                    <td>Communication Skills</td>
                                    <td><center><Form.Check type="radio" name="communicationGA" checked={this.state.communicationGA == 'introductory'} value="introductory" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="communicationGA" checked={this.state.communicationGA == 'intermediate'} value="intermediate" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="communicationGA" checked={this.state.communicationGA == 'advanced'} value="advanced" onChange={this.handleChange} /></center></td>
                                </tr>
                                <tr>
                                    <td>Professionalism</td>
                                    <td><center><Form.Check type="radio" name="professionalismGA" checked={this.state.professionalismGA == 'introductory'} value="introductory" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="professionalismGA" checked={this.state.professionalismGA == 'intermediate'} value="intermediate" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="professionalismGA" checked={this.state.professionalismGA == 'advanced'} value="advanced" onChange={this.handleChange} /></center></td>
                                </tr>
                                <tr>
                                    <td>Impact of Engineering of Society and Environment</td>
                                    <td><center><Form.Check type="radio" name="environmentGA" checked={this.state.environmentGA == 'introductory'} value="introductory" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="environmentGA" checked={this.state.environmentGA == 'intermediate'} value="intermediate" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="environmentGA" checked={this.state.environmentGA == 'advanced'} value="advanced" onChange={this.handleChange} /></center></td>
                                </tr>
                                <tr>
                                    <td>Ethics and Equity</td>
                                    <td><center><Form.Check type="radio" name="ethicsGA" checked={this.state.ethicsGA == 'introductory'} value="introductory" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="ethicsGA" checked={this.state.ethicsGA == 'intermediate'} value="intermediate" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="ethicsGA" checked={this.state.ethicsGA == 'advanced'} value="advanced" onChange={this.handleChange} /></center></td>
                                </tr>
                                <tr>
                                    <td>Economics and Project Management</td>
                                    <td><center><Form.Check type="radio" name="economicsGA" checked={this.state.economicsGA == 'introductory'} value="introductory" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="economicsGA" checked={this.state.economicsGA == 'intermediate'} value="intermediate" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="economicsGA" checked={this.state.economicsGA == 'advanced'} value="advanced" onChange={this.handleChange} /></center></td>
                                </tr>
                                <tr>
                                    <td>Life-Long Learning</td>
                                    <td><center><Form.Check type="radio" name="learningGA" checked={this.state.learningGA == 'introductory'} value="introductory" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="learningGA" checked={this.state.learningGA == 'intermediate'} value="intermediate" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="learningGA" checked={this.state.learningGA == 'advanced'} value="advanced" onChange={this.handleChange} /></center></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Form.Group>

                    <br />

                    <Form.Group controlId="formGridCategory">
                        <Form.Label><b>Content Category Breakdown</b></Form.Label>
                        <p><small>Please enter the course category breakdown percentage as an integer</small></p>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th><center>Math</center></th>
                                    <th><center>Basic Science</center></th>
                                    <th><center>Complementary Studies</center></th>
                                    <th><center>Engineering Science</center></th>
                                    <th><center>Engineering Desgin</center></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><center><Form.Control type="number" name="mathPerct" value={this.state.mathPerct} min="0" max="100" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Control type="number" name="basicSciPerct" value={this.state.basicSciPerct} min="0" max="100" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Control type="number" name="studiesPerct" value={this.state.studiesPerct} min="0" max="100" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Control type="number" name="engSciPerct" value={this.state.engSciPerct} min="0" max="100" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Control type="number" name="engDesignPerct" value={this.state.engDesignPerct} min="0" max="100" onChange={this.handleChange} /></center></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>
            </div>
        )
    }
}

