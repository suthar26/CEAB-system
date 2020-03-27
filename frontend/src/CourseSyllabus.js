import React from 'react';
import axios from 'axios';

export default class CourseSyllabus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {courseName: '',
        courseDescription: '',
        graduateAttributesUsed: '',
        instructorName: '',
        courseHours: '',
        courseCode: '',
        tutHours: '',
        labHours: '',}
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
            <form class="container" autocomplete="on" onSubmit={this.handleSubmit}>
                <div class="container-fluid">
                    <div class="form-group" style={{float: "left"}}>
                        <label for="courseName">Course Name</label>
                        <input name="courseName" type="text" id="courseName" placeholder='Course Name' class="form-control" value={this.state.courseName} onChange={e => this.change(e)} />
                    </div>
                    <div class="form-group" style={{float: "left",marginLeft: "10px"}}>
                        <label for="courseCode">Course Code</label>
                        <input name="courseCode" type="text" id="courseCode" placeholder='Course Code' class="form-control" value={this.state.courseCode} onChange={e => this.change(e)} />
                    </div>
                    <div class="form-group" style={{float: "left",marginLeft: "10px"}}>
                        <label for="InstructorName">Instructor Name</label>
                        <input name="instructorName" type="text" id="InstructorName" class="form-control" placeholder='Instructor Name' aria-describedby="instructorHelp" value={this.state.instructorName} onChange={e => this.change(e)} />
                        <small id="instructorHelp" class="form-text" style={{color: "black"}}>Enter First & Last Name</small>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <p>Lecture Information: </p>

                    <div class="form-group" style={{float: "left"}}>
                        <input name="courseHours" class="form-control" id="courseHours" type="number" placeholder='Lecture Hours' aria-describedby="courseHelp" value={this.state.courseHours} onChange={e => this.change(e)} />
                        <small id="courseHelp" class="form-text" style={{color: "black"}}>Lecture hours per week</small>
                    </div>
                    <div class="form-group" style={{float: "left",marginLeft: "10px"}}>
                       <input name="tutHours" class="form-control" id="tutHours" type="number" placeholder='Tutorial Hours' aria-describedby="tutHelp" value={this.state.tutHours} onChange={e => this.change(e)} />
                       <small id="tutHelp" class="form-text" style={{color: "black"}}>Tutorial hours per week, 0 otherwise</small>
                    </div>
                    <div class="form-group" style={{float: "left",marginLeft: "10px"}}>
                        <input name="labHours" class="form-control" id="labHours" type="number" placeholder='Lab Hours' aria-describedby="labHelp" value={this.state.labHours} onChange={e => this.change(e)} />
                        <small id="labHelp" class="form-text" style={{color: "black"}}>Lab hours per week, 0 otherwise</small>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div class="form-group">
                        <label for="courseDescription">Course Description</label>
                        <textarea name="courseDescription" placeholder='Enter Course Description' id="courseDescription" rows="7" cols="70" class="form-control" value={this.state.courseDescription} onChange={e => this.change(e)} />
                    </div>
                </div>
                <br />
                <br />
                <div class="container-fluid">
                    <fieldset>
                        <legend>Grading Attributes Used in Course</legend>
                        <p>
                            <label><input type="checkbox"  name="graduateAttributesUsed" value="knowledge base"/>Knowledge Base</label>
                            <br />
                            <label><input type="checkbox"  name="graduateAttributesUsed" value="problem analysis"/>Problem Analysis</label>
                            <br />
                            <label><input type="checkbox"  name="graduateAttributesUsed" value="investigation"/>Investigation</label>
                            <br />
                            <label><input type="checkbox"  name="graduateAttributesUsed" value="design"/>Design</label>
                            <br />
                            <label><input type="checkbox"  name="graduateAttributesUsed" value="use of engineering tools"/>Use of Engineering Tools</label>
                            <br />
                            <label><input type="checkbox"  name="graduateAttributesUsed" value="individual and team work"/>Individual and Team Work</label>
                            <br />
                            <label><input type="checkbox"  name="graduateAttributesUsed" value="communication skills"/>Communication Skills</label>
                            <br />
                            <label><input type="checkbox"  name="graduateAttributesUsed" value="professionalism"/>Professionalism</label>
                            <br />
                            <label><input type="checkbox"  name="graduateAttributesUsed" value="impact on society and environment"/>Impact of Engineering of Society and the Environment</label>
                            <br />
                            <label><input type="checkbox"  name="graduateAttributesUsed" value="ethics and equity"/>Ethics and Equity</label>
                            <br />
                            <label><input type="checkbox"  name="graduateAttributesUsed" value="economics and project management"/>Economics and Project Management</label>
                            <br />
                            <label><input type="checkbox"  name="graduateAttributesUsed" value="life long learning"/>Life-Long Learning</label>
                        </p>
                    </fieldset>
                </div>
                <br />
                <div class="form-group">
                    <h4 style={{marginLeft: "10px"}}>Content Category Breakdown</h4>
                    <p style={{marginLeft: "10px"}}>Please enter the course category breakdown percentage as an integer</p>
                     <table style={{border: "3px solid black", width:"100%", margin: "0.5px"}}>
                        <tr style={{borderRight: "2px solid black"}}>
                          <th style={{borderRight: "2px solid black"}}><center>Math</center></th>
                          <th style={{borderRight: "2px solid black"}}><center>Basic Science</center></th>
                          <th style={{borderRight: "2px solid black"}}><center>Complementary Studies</center></th>
                          <th style={{borderRight: "2px solid black"}}><center>Engineering Science</center></th>
                          <th><center>Engineering Design</center></th>
                        </tr>
                        <tr>
                          <td><center><input type="number" id="mathPct" name="mathPct" min="0" max="100"/></center></td>
                          <td ><center><input type="number" id="basicSciPct" name="basicSciPct" min="0" max="100"/></center></td>
                          <td ><center><input type="number" id="compStudyPct" name="compStudyPct" min="0" max="100"/></center></td>
                          <td ><center><input type="number" id="engSciPct" name="engSciPct" min="0" max="100"/></center></td>
                          <td><center><input type="number" id="engDesignPct" name="engDesignPct" min="0" max="100"/></center></td>
                        </tr>
                      </table>
                </div>
                <br />
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        )
    }

}

