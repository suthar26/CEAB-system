//CEAB Helper app to assist with making the documents required to be an accredited for engineering
//Group 3
//3/4/20

import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export default class ContinuousImprovment extends React.Component {

    //constructor that creates the state and binds the submit and update methods
    constructor(props) {
        super(props);
        this.state = {
            load: '',
            courseName: '',
            courseID: '',
            courseYear: '',
            graduateAttribute: '',
            graduateAttributeAchieved: '',
            howAchievedKB: '',
            howAchievedPA: '',
            howAchievedI: '',
            howAchievedD: '',
            howAchievedUET: '',
            howAchievedITW: '',
            howAchievedCS: '',
            howAchievedP: '',
            howAchievedIESE: '',
            howAchievedEE: '',
            howAchievedEPM: '',
            howAchievedLLL: '',
            gradeAchievedKB: '',
            gradeAchievedPA: '',
            gradeAchievedI: '',
            gradeAchievedD: '',
            gradeAchievedUET: '',
            gradeAchievedITW: '',
            gradeAchievedCS: '',
            gradeAchievedP: '',
            gradeAchievedIESE: '',
            gradeAchievedEE: '',
            gradeAchievedEPM: '',
            gradeAchievedLLL: '',
            CourseImprovments: '',
        }
        this.handleChange = this.change.bind(this);
        this.handleSubmit = this.onSubmit.bind(this);
    }

    //gets the values entered by user and sets it the corresponding state variable
    change = e => {
        this.setState(
            { [e.target.name]: e.target.value });
    };

    //calls api with post request to save the form, and then reloads to the main page
    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        axios.post('/api/submitImprovement', {
            info: this.state
        }).then(alert("Saved"));
        this.props.changeTab('MainPage');

    };

    //assigns all the given values to the state
    setLoadValues = (values) => {
        if (values != null && values != undefined) {
            for (const value of Object.keys(this.state)) {
                if (value != 'load') {
                    this.setState({ [value]: values[value] });
                }
            }
            console.log(this.state);
        }

    }

    //calls api to get previously stored info given the course code
    loadImprovement = () => {
        if (this.state.load) {
            fetch('/api/loadImprovement?courseID=' + this.state.load)
                .then((data) => data.json())
                .then((res) => this.setLoadValues(res.data))
        }
    };

    //renders continuous improvement tab
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
                        <Button variant="primary" onClick={() => this.loadImprovement()}>Load Course</Button>
                    </InputGroup.Append>
                </InputGroup>
                <form style={{ backgroundColor: "#778899" }} autocomplete="on" onSubmit={this.handleSubmit}>
                    <div class="container-fluid">
                        <div class="form-group" style={{ float: "left" }}>
                            <label for="courseName"><b>Course Name:</b></label>
                            <input name="courseName" type="text" id="courseName" placeholder='Course Name' class="form-control" required value={this.state.courseName} onChange={e => this.change(e)} />
                        </div>
                        <div class="form-group" style={{ float: "left", marginLeft: "10px" }}>
                            <label for="courseCode"><b>Course Code:</b></label>
                            <input name="courseID" type="text" id="courseID" placeholder='Course Code' class="form-control" required value={this.state.courseID} onChange={e => this.change(e)} />
                        </div>
                        <div class="form-group" style={{ float: "left", marginLeft: "10px" }}>
                            <label for="courseCode"><b>Course Year:</b></label>
                            <input name="courseYear" type="text" id="courseYear" placeholder='Course Year' class="form-control" required value={this.state.courseYear} onChange={e => this.change(e)} />
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />

                        <p><b>Graduate Attributes:</b></p>
                        <br />
                        <div class="container-fluid">
                            <fieldset>
                                <label for="gradeAchievedKB">Knowledge Base:</label>&nbsp;&nbsp;
                            <select id="gradeAchievedKB" name="gradeAchievedKB" value={this.state.gradeAchievedKB} onChange={e => this.change(e)}>
                                    <option value="unsatisfactory">Unsatisfactory</option>
                                    <option value="developing">Developing</option>
                                    <option value="satisfactory">Satisfactory</option>
                                    <option value="excellent">Excellent</option>
                                </select>
                                <input name="howAchievedKB" type="text" id="howAchievedKB" placeholder='Actions by the professor to ensure that the students have met this attribute' class="form-control" value={this.state.howAchievedKB} onChange={e => this.change(e)} />
                                <br />
                                <br />

                                <label for="gradeAchievedPA">Problem Analysis:</label>&nbsp;&nbsp;
                            <select id="gradeAchievedPA" name="gradeAchievedPA" value={this.state.gradeAchievedPA} onChange={e => this.change(e)}>
                                    <option value="unsatisfactory">Unsatisfactory</option>
                                    <option value="developing">Developing</option>
                                    <option value="satisfactory">Satisfactory</option>
                                    <option value="excellent">Excellent</option>
                                </select>
                                <input name="howAchievedPA" type="text" id="howAchievedPA" placeholder='Actions by the professor to ensure that the students have met this attribute' class="form-control" value={this.state.howAchievedPA} onChange={e => this.change(e)} />
                                <br />
                                <br />

                                <label for="gradeAchievedI">Investigation:</label>&nbsp;&nbsp;
                            <select id="gradeAchievedI" name="gradeAchievedI" value={this.state.gradeAchievedI} onChange={e => this.change(e)}>
                                    <option value="unsatisfactory">Unsatisfactory</option>
                                    <option value="developing">Developing</option>
                                    <option value="satisfactory">Satisfactory</option>
                                    <option value="excellent">Excellent</option>
                                </select>
                                <input name="howAchievedI" type="text" id="howAchievedI" placeholder='Actions by the professor to ensure that the students have met this attribute' class="form-control" value={this.state.howAchievedI} onChange={e => this.change(e)} />
                                <br />
                                <br />

                                <label for="gradeAchievedD">Design:</label>&nbsp;&nbsp;
                            <select id="gradeAchievedD" name="gradeAchievedD" value={this.state.gradeAchievedD} onChange={e => this.change(e)}>
                                    <option value="unsatisfactory">Unsatisfactory</option>
                                    <option value="developing">Developing</option>
                                    <option value="satisfactory">Satisfactory</option>
                                    <option value="excellent">Excellent</option>
                                </select>
                                <input name="howAchievedD" type="text" id="howAchievedD" placeholder='Actions by the professor to ensure that the students have met this attribute' class="form-control" value={this.state.howAchievedD} onChange={e => this.change(e)} />
                                <br />
                                <br />

                                <label for="gradeAchievedUET">Use of Engineering Tools:</label>&nbsp;&nbsp;
                            <select id="gradeAchievedUET" name="gradeAchievedUET" value={this.state.gradeAchievedUET} onChange={e => this.change(e)}>
                                    <option value="unsatisfactory">Unsatisfactory</option>
                                    <option value="developing">Developing</option>
                                    <option value="satisfactory">Satisfactory</option>
                                    <option value="excellent">Excellent</option>
                                </select>
                                <input name="howAchievedUET" type="text" id="howAchievedUET" placeholder='Actions by the professor to ensure that the students have met this attribute' class="form-control" value={this.state.howAchievedUET} onChange={e => this.change(e)} />
                                <br />
                                <br />

                                <label for="gradeAchievedITW">Individual and Team Work:</label>&nbsp;&nbsp;
                            <select id="gradeAchievedITW" name="gradeAchievedITW" value={this.state.gradeAchievedITW} onChange={e => this.change(e)}>
                                    <option value="unsatisfactory">Unsatisfactory</option>
                                    <option value="developing">Developing</option>
                                    <option value="satisfactory">Satisfactory</option>
                                    <option value="excellent">Excellent</option>
                                </select>
                                <input name="howAchievedITW" type="text" id="howAchievedITW" placeholder='Actions by the professor to ensure that the students have met this attribute' class="form-control" value={this.state.howAchievedITW} onChange={e => this.change(e)} />
                                <br />
                                <br />

                                <label for="gradeAchievedCS">Communication Skills:</label>&nbsp;&nbsp;
                            <select id="gradeAchievedCS" name="gradeAchievedCS" value={this.state.gradeAchievedCS} onChange={e => this.change(e)}>
                                    <option value="unsatisfactory">Unsatisfactory</option>
                                    <option value="developing">Developing</option>
                                    <option value="satisfactory">Satisfactory</option>
                                    <option value="excellent">Excellent</option>
                                </select>
                                <input name="howAchievedCS" type="text" id="howAchievedCS" placeholder='Actions by the professor to ensure that the students have met this attribute' class="form-control" value={this.state.howAchievedCS} onChange={e => this.change(e)} />
                                <br />
                                <br />

                                <label for="gradeAchievedP">Professionalism:</label>&nbsp;&nbsp;
                            <select id="gradeAchievedP" name="gradeAchievedP" value={this.state.gradeAchievedP} onChange={e => this.change(e)}>
                                    <option value="unsatisfactory">Unsatisfactory</option>
                                    <option value="developing">Developing</option>
                                    <option value="satisfactory">Satisfactory</option>
                                    <option value="excellent">Excellent</option>
                                </select>
                                <input name="howAchievedP" type="text" id="howAchievedP" placeholder='Actions by the professor to ensure that the students have met this attribute' class="form-control" value={this.state.howAchievedP} onChange={e => this.change(e)} />
                                <br />
                                <br />

                                <label for="gradeAchievedIESE">Impact of Engineering of Society and the Environment:</label>&nbsp;&nbsp;
                            <select id="gradeAchievedIESE" name="gradeAchievedIESE" value={this.state.gradeAchievedIESE} onChange={e => this.change(e)}>
                                    <option value="unsatisfactory">Unsatisfactory</option>
                                    <option value="developing">Developing</option>
                                    <option value="satisfactory">Satisfactory</option>
                                    <option value="excellent">Excellent</option>
                                </select>
                                <input name="howAchievedIESE" type="text" id="howAchievedIESE" placeholder='explaActions by the professor to ensure that the students have met this attributenation' class="form-control" value={this.state.howAchievedIESE} onChange={e => this.change(e)} />
                                <br />
                                <br />

                                <label for="gradeAchievedEE">Ethics and Equity:</label>&nbsp;&nbsp;
                            <select id="gradeAchievedEE" name="gradeAchievedEE" value={this.state.gradeAchievedEE} onChange={e => this.change(e)}>
                                    <option value="unsatisfactory">Unsatisfactory</option>
                                    <option value="developing">Developing</option>
                                    <option value="satisfactory">Satisfactory</option>
                                    <option value="excellent">Excellent</option>
                                </select>
                                <input name="howAchievedEE" type="text" id="howAchievedEE" placeholder='Actions by the professor to ensure that the students have met this attribute' class="form-control" value={this.state.howAchievedEE} onChange={e => this.change(e)} />
                                <br />
                                <br />

                                <label for="gradeAchievedEPM">Economics and Project Management:</label>&nbsp;&nbsp;
                            <select id="gradeAchievedEPM" name="gradeAchievedEPM" value={this.state.gradeAchievedEPM} onChange={e => this.change(e)}>
                                    <option value="unsatisfactory">Unsatisfactory</option>
                                    <option value="developing">Developing</option>
                                    <option value="satisfactory">Satisfactory</option>
                                    <option value="excellent">Excellent</option>
                                </select>
                                <input name="howAchievedEPM" type="text" id="howAchievedEPM" placeholder='Actions by the professor to ensure that the students have met this attribute' class="form-control" value={this.state.howAchievedEPM} onChange={e => this.change(e)} />
                                <br />
                                <br />

                                <label for="gradeAchievedLLL">Life-Long Learning:</label>&nbsp;&nbsp;
                            <select id="gradeAchievedLLL" name="gradeAchievedLLL" value={this.state.gradeAchievedLLL} onChange={e => this.change(e)}>
                                    <option value="unsatisfactory">Unsatisfactory</option>
                                    <option value="developing">Developing</option>
                                    <option value="satisfactory">Satisfactory</option>
                                    <option value="excellent">Excellent</option>
                                </select>
                                <input name="howAchievedLLL" type="text" id="howAchievedLLL" placeholder='Actions by the professor to ensure that the students have met this attribute' class="form-control" value={this.state.howAchievedLLL} onChange={e => this.change(e)} />
                                <br />
                                <br />
                            </fieldset>
                        </div>
                        <div>
                            <label for=""><b>Course Improvments:</b></label>
                            <input name="CourseImprovments" type="text" id="CourseImprovments" required placeholder='Please indicate what is going to be implimented in order to improve the area in which students achieved low performance' class="form-control" value={this.state.CourseImprovments} onChange={e => this.change(e)} />
                        </div>
                    </div>
                    <br />
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }

}