import React from 'react';
import axios from 'axios';

export default class ContinuousImprovment extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.data != null) {
            this.state = this.props.data;
        }
        else {
            this.state = {
                courseName: '',
                courseCode: '',
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
                CourseImprovments: '',
            }
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
        axios.post('/api/submitImprovement', {
            data: this.state
        }).then(alert("Saved"));
        window.location.reload();

    };

    render() {
        return (
            <form style={{ backgroundColor: "#778899" }} autocomplete="on" onSubmit={this.handleSubmit}>
                <div class="container-fluid">
                    <div class="form-group" style={{ float: "left" }}>
                        <label for="courseName"><b>Course Name:</b></label>
                        <input name="courseName" type="text" id="courseName" placeholder='Course Name' class="form-control" value={this.state.courseName} onChange={e => this.change(e)} />
                    </div>
                    <div class="form-group" style={{ float: "left", marginLeft: "10px" }}>
                        <label for="courseCode"><b>Course Code:</b></label>
                        <input name="courseCode" type="text" id="courseCode" placeholder='Course Code' class="form-control" value={this.state.courseCode} onChange={e => this.change(e)} />
                    </div>
                    <div class="form-group" style={{ float: "left", marginLeft: "10px" }}>
                        <label for="courseCode"><b>Course Year:</b></label>
                        <input name="courseYear" type="text" id="courseYear" placeholder='Course Year' class="form-control" value={this.state.courseYear} onChange={e => this.change(e)} />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />

                    <p><b>Graduate Attributes:</b></p>
                    <br />
                    <div class="container-fluid">
                        <fieldset>
                            <label for="knowledge base">Knowledge Base:</label>&nbsp;&nbsp;
                            <select id="knowledge base">
                                <option value="unsatisfactory">Unsatisfactory</option>
                                <option value="developing">Developing</option>
                                <option value="satisfactory">Satisfactory</option>
                                <option value="excellent">Excellent</option>
                            </select>
                            <input name="howAchievedKB" type="text" id="howAchievedKB" placeholder='Actions by the professor to ensure that the students have met this attribute' class="form-control" value={this.state.howAchievedKB} onChange={e => this.change(e)} />
                            <br />
                            <br />

                            <label for="problem analysis">Problem Analysis:</label>&nbsp;&nbsp;
                            <select id="problem analysis">
                                <option value="unsatisfactory">Unsatisfactory</option>
                                <option value="developing">Developing</option>
                                <option value="satisfactory">Satisfactory</option>
                                <option value="excellent">Excellent</option>
                            </select>
                            <input name="howAchievedPA" type="text" id="howAchievedPA" placeholder='Actions by the professor to ensure that the students have met this attribute' class="form-control" value={this.state.howAchievedPA} onChange={e => this.change(e)} />
                            <br />
                            <br />

                            <label for="investigation">Investigation:</label>&nbsp;&nbsp;
                            <select id="investigation">
                                <option value="unsatisfactory">Unsatisfactory</option>
                                <option value="developing">Developing</option>
                                <option value="satisfactory">Satisfactory</option>
                                <option value="excellent">Excellent</option>
                            </select>
                            <input name="howAchievedI" type="text" id="howAchievedI" placeholder='Actions by the professor to ensure that the students have met this attribute' class="form-control" value={this.state.howAchievedI} onChange={e => this.change(e)} />
                            <br />
                            <br />

                            <label for="design">Design:</label>&nbsp;&nbsp;
                            <select id="design">
                                <option value="unsatisfactory">Unsatisfactory</option>
                                <option value="developing">Developing</option>
                                <option value="satisfactory">Satisfactory</option>
                                <option value="excellent">Excellent</option>
                            </select>
                            <input name="howAchievedD" type="text" id="howAchievedD" placeholder='Actions by the professor to ensure that the students have met this attribute' class="form-control" value={this.state.howAchievedD} onChange={e => this.change(e)} />
                            <br />
                            <br />

                            <label for="use of engineering tools">Use of Engineering Tools:</label>&nbsp;&nbsp;
                            <select id="use of engineering tools">
                                <option value="unsatisfactory">Unsatisfactory</option>
                                <option value="developing">Developing</option>
                                <option value="satisfactory">Satisfactory</option>
                                <option value="excellent">Excellent</option>
                            </select>
                            <input name="howAchievedUET" type="text" id="howAchievedUET" placeholder='Actions by the professor to ensure that the students have met this attribute' class="form-control" value={this.state.howAchievedUET} onChange={e => this.change(e)} />
                            <br />
                            <br />

                            <label for="individual and team work">Individual and Team Work:</label>&nbsp;&nbsp;
                            <select id="individual and team work">
                                <option value="unsatisfactory">Unsatisfactory</option>
                                <option value="developing">Developing</option>
                                <option value="satisfactory">Satisfactory</option>
                                <option value="excellent">Excellent</option>
                            </select>
                            <input name="howAchievedITW" type="text" id="howAchievedITW" placeholder='Actions by the professor to ensure that the students have met this attribute' class="form-control" value={this.state.howAchievedITW} onChange={e => this.change(e)} />
                            <br />
                            <br />

                            <label for="communication skills">Communication Skills:</label>&nbsp;&nbsp;
                            <select id="communication skills">
                                <option value="unsatisfactory">Unsatisfactory</option>
                                <option value="developing">Developing</option>
                                <option value="satisfactory">Satisfactory</option>
                                <option value="excellent">Excellent</option>
                            </select>
                            <input name="howAchievedCS" type="text" id="howAchievedCS" placeholder='Actions by the professor to ensure that the students have met this attribute' class="form-control" value={this.state.howAchievedCS} onChange={e => this.change(e)} />
                            <br />
                            <br />

                            <label for="professionalism">Professionalism:</label>&nbsp;&nbsp;
                            <select id="professionalism">
                                <option value="unsatisfactory">Unsatisfactory</option>
                                <option value="developing">Developing</option>
                                <option value="satisfactory">Satisfactory</option>
                                <option value="excellent">Excellent</option>
                            </select>
                            <input name="howAchievedP" type="text" id="howAchievedP" placeholder='Actions by the professor to ensure that the students have met this attribute' class="form-control" value={this.state.howAchievedP} onChange={e => this.change(e)} />
                            <br />
                            <br />

                            <label for="impact on society and environment">Impact of Engineering of Society and the Environment:</label>&nbsp;&nbsp;
                            <select id="impact on society and environment">
                                <option value="unsatisfactory">Unsatisfactory</option>
                                <option value="developing">Developing</option>
                                <option value="satisfactory">Satisfactory</option>
                                <option value="excellent">Excellent</option>
                            </select>
                            <input name="howAchievedIESE" type="text" id="howAchievedIESE" placeholder='explaActions by the professor to ensure that the students have met this attributenation' class="form-control" value={this.state.howAchievedIESE} onChange={e => this.change(e)} />
                            <br />
                            <br />

                            <label for="ethics and equity">Ethics and Equity:</label>&nbsp;&nbsp;
                            <select id="ethics and equity">
                                <option value="unsatisfactory">Unsatisfactory</option>
                                <option value="developing">Developing</option>
                                <option value="satisfactory">Satisfactory</option>
                                <option value="excellent">Excellent</option>
                            </select>
                            <input name="howAchievedEE" type="text" id="howAchievedEE" placeholder='Actions by the professor to ensure that the students have met this attribute' class="form-control" value={this.state.howAchievedEE} onChange={e => this.change(e)} />
                            <br />
                            <br />

                            <label for="economics and project management">Economics and Project Management:</label>&nbsp;&nbsp;
                            <select id="economics and project management">
                                <option value="unsatisfactory">Unsatisfactory</option>
                                <option value="developing">Developing</option>
                                <option value="satisfactory">Satisfactory</option>
                                <option value="excellent">Excellent</option>
                            </select>
                            <input name="howAchievedEPM" type="text" id="howAchievedEPM" placeholder='Actions by the professor to ensure that the students have met this attribute' class="form-control" value={this.state.howAchievedEPM} onChange={e => this.change(e)} />
                            <br />
                            <br />

                            <label for="life long learning">Life-Long Learning:</label>&nbsp;&nbsp;
                            <select id="life long learning">
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
                        <input name="CourseImprovments" type="text" id="CourseImprovments" placeholder='Please indicate what is going to be implimented in order to improve the area in which students achieved low performance' class="form-control" value={this.state.CourseImprovments} onChange={e => this.change(e)} />
                    </div>
                </div>
                <br />
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        )
    }

}