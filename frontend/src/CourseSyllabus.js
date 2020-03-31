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
        if (this.props.data != null) {
            this.state = this.props.data;
        }
        else {
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
        }
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
        window.location.reload();

    };

    render() {
        return (
            <div class="container">
                <Form autocomplete="on" onSubmit={this.handleSubmit}>
                    <h1>Course Syllabus</h1>
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
                        <Form.Label><b>Lecture Hours</b></Form.Label>
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
                                    <td><center><Form.Check type="radio" name="knowledgeGA" value="introductory" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="knowledgeGA" value="intermediate" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="knowledgeGA" value="advanced"/></center></td>
                                </tr>
                                <tr>
                                    <td>Problem Analysis</td>
                                    <td><center><Form.Check type="radio" name="problemGA" value="introductory" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="problemGA" value="intermediate" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="problemGA" value="advanced" onChange={this.handleChange} /></center></td>
                                </tr>
                                <tr>
                                    <td>Investigation</td>
                                    <td><center><Form.Check type="radio" name="investigationGA" value="introductory" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="investigationGA" value="intermediate" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="investigationGA" value="advanced" onChange={this.handleChange} /></center></td>
                                </tr>
                                <tr>
                                    <td>Design</td>
                                    <td><center><Form.Check type="radio" name="designGA" value="introductory" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="designGA" value="intermediate" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="designGA" value="advanced" onChange={this.handleChange} /></center></td>
                                </tr>
                                <tr>
                                    <td>Use of Engineering Tools</td>
                                    <td><center><Form.Check type="radio" name="engineeringToolsGA" value="introductory" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="engineeringToolsGA" value="intermediate" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="engineeringToolsGA" value="advanced" onChange={this.handleChange} /></center></td>
                                </tr>
                                <tr>
                                    <td>Individual and Team Work</td>
                                    <td><center><Form.Check type="radio" name="individualGA" value="introductory" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="individualGA" value="intermediate" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="individualGA" value="advanced" onChange={this.handleChange} /></center></td>
                                </tr>
                                <tr>
                                    <td>Communication Skills</td>
                                    <td><center><Form.Check type="radio" name="communicationGA" value="introductory" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="communicationGA" value="intermediate" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="communicationGA" value="advanced" onChange={this.handleChange} /></center></td>
                                </tr>
                                <tr>
                                    <td>Professionalism</td>
                                    <td><center><Form.Check type="radio" name="professionalismGA" value="introductory" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="professionalismGA" value="intermediate" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="professionalismGA" value="advanced" onChange={this.handleChange} /></center></td>
                                </tr>
                                <tr>
                                    <td>Impact of Engineering of Society and Environment</td>
                                    <td><center><Form.Check type="radio" name="environmentGA" value="introductory" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="environmentGA" value="intermediate" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="environmentGA" value="advanced" onChange={this.handleChange} /></center></td>
                                </tr>
                                <tr>
                                    <td>Ethics and Equity</td>
                                    <td><center><Form.Check type="radio" name="ethicsGA" value="introductory" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="ethicsGA" value="intermediate" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="ethicsGA" value="advanced" onChange={this.handleChange} /></center></td>
                                </tr>
                                <tr>
                                    <td>Economics and Project Management</td>
                                    <td><center><Form.Check type="radio" name="economicsGA" value="introductory" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="economicsGA" value="intermediate" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="economicsGA" value="advanced" onChange={this.handleChange} /></center></td>
                                </tr>
                                <tr>
                                    <td>Life-Long Learning</td>
                                    <td><center><Form.Check type="radio" name="learningGA" value="introductory" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="learningGA" value="intermediate" onChange={this.handleChange} /></center></td>
                                    <td><center><Form.Check type="radio" name="learningGA" value="advanced" onChange={this.handleChange} /></center></td>
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

