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
        this.state = {
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
        {[e.target.name]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();
        axios.post('/api/submitInstructor', {
            courses: this.state
        }).then(alert("Saved"));
        window.location.reload();

    };

    render() {
        return (
            <div class = "container">
                <Form autocomplete="on" onSubmit={this.handleSubmit}>
                    <h1>Course Information</h1>
                    <br />
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCourseName">
                            <Form.Label><b>Course Name</b></Form.Label>
                            <Form.Control type="text" name="courseName" placeholder="Enter Course Name" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCourseYear">
                            <Form.Label><b>Course Year</b></Form.Label>
                            <Form.Control type="number" name="courseYear" min="2000" placeholder="Enter Course Year" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCourseCode">
                            <Form.Label><b>Course Code</b></Form.Label>
                            <Form.Control type="text" name="courseCode" placeholder="Enter Course Code" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridInstructorName">
                            <Form.Label><b>Instructor Name</b></Form.Label>
                            <Form.Control type="text" name="instructorName" placeholder="Enter First & Last Name" onChange={this.handleChange} />
                        </Form.Group>
                    </Form.Row>
                    <br />
                    <Form.Group controlId="formGridLecture">
                        <Form.Label><b>Lecutre Hours</b></Form.Label>
                        <Form.Control type="number" name="lecHours" min="1" step="any" placeholder="Enter Lecture hours per week" onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formGridTutorial">
                        <Form.Row>
                            <Form.Label><b>Tutorial Hours -</b></Form.Label>
                            <p>Enter 0 if no Tutorial</p>
                        </Form.Row>
                        <Form.Control type="number" name="tutHours" min="0" placeholder="Enter Tutorial hours per week" onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formGridLab">
                        <Form.Row>
                            <Form.Label><b>Lab Hours -</b></Form.Label>
                            <p>Enter 0 if no Tutorial</p>
                        </Form.Row>
                        <Form.Control type="number" name="labHours" min="0" placeholder="Enter Lab hours per week" onChange={this.handleChange} />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formGridDescription">
                        <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text><b>Course Description</b></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" name="courseDescription" aria-label="With textarea" onChange={this.handleChange} />
                        </InputGroup>
                    </Form.Group>
                    <br />

                    <Form.Group id="formGridCheckbox">
                        <Form.Label><b>Grading Attributes Used in Course</b></Form.Label>
                        <p><small>Select all that apply</small></p>
                        <Form.Check type="checkbox" label="Knowledge Base" name="knowledgeGA" onChange={this.handleChange} />
                        <Form.Check type="checkbox" label="Problem Analysis" name="problemGA" onChange={this.handleChange} />
                        <Form.Check type="checkbox" label="Investigation" name="investigationGA" onChange={this.handleChange} />
                        <Form.Check type="checkbox" label="Design" name="designGA" onChange={this.handleChange} />
                        <Form.Check type="checkbox" label="Use of Engineering Tools" name="engineeringToolsGA" onChange={this.handleChange} />
                        <Form.Check type="checkbox" label="Individual and Team Work" name="individualGA" onChange={this.handleChange} />
                        <Form.Check type="checkbox" label="Communication Skills" name="communicationGA" onChange={this.handleChange} />
                        <Form.Check type="checkbox" label="Professionalism" name="professionalismGA" onChange={this.handleChange} />
                        <Form.Check type="checkbox" label="Impact of Engineering of Society and the Environment" name="environmentGA" onChange={this.handleChange} />
                        <Form.Check type="checkbox" label="Ethics and Equity" name="ethicsGA" onChange={this.handleChange} />
                        <Form.Check type="checkbox" label="Economics and Project Management" name="economicsGA" onChange={this.handleChange} />
                        <Form.Check type="checkbox" label="Life-Long Learning" name="learningGA" onChange={this.handleChange} />
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
                                    <td><center><Form.Control type="number" name="mathPerct" min="0" max="100" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Control type="number" name="basicSciPerct" min="0" max="100" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Control type="number" name="studiesPerct" min="0" max="100" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Control type="number" name="engSciPerct" min="0" max="100" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Control type="number" name="engDesignPerct" min="0" max="100" onChange={this.handleChange} /></center></td>
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

