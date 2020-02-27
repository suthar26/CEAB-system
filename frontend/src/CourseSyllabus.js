import React from 'react';

export default class CourseSyllabus extends React.Component {
    state = {
        courseName: '',
        courseDescription: '',
        graduateAttributesUsed: '',
        instructorName: '',
        courseType: '', //lec, tut, lab
        courseHours: '',
    }

    //gets the values entered by user and set it state variables above
    change = e => {
        this.setState(
        {[e.target.name]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();
        //pass this.state variables to App.js or do something with them
        //console.log(this.state)

    };

    render() {
        return (
            <form style={{backgroundColor: "#778899"}}>
                <div class="container-fluid">
                    <div class="form-group" style={{float: "left"}}>
                        <label for="courseName">Course Name</label>
                        <input name="courseName" type="text" id="courseName" placeholder='Course Name' class="form-control" value={this.state.courseName} onChange={e => this.change(e)} />
                    </div>
                    <div class="form-group" style={{float: "left",marginLeft: "10px"}}>
                        <label for="InstructorName">Instructor Name</label>
                        <input name="instructorName" type="text" id="InstructorName" class="form-control" placeholder='Instructor Name' aria-describedby="instructorHelp" value={this.state.instructorName} onChange={e => this.change(e)} />
                        <small id="instructorHelp" class="form-text" style={{color: "black"}}>Enter First & Last Name</small>
                    </div>
                    <div class="form-group" style={{float: "left", marginLeft:"10px"}}>
                        <label for="courseType">Course Type</label>
                        <select class="form-control" id="courseType" name="courseType" value={this.state.courseType} onChange={e => this.change(e)}>
                              <option value="Lecture">Lecture</option>
                              <option value="Tutorial">Tutorial</option>
                              <option value="Lab">Lab</option>
                        </select>
                    </div>
                    <div class="form-group" style={{float: "left", marginLeft:"10px"}}>
                        <label for="courseHours">Course Hours</label>
                        <input name="courseHours" class="form-control" id="courseHours" type="number" placeholder='Enter Hours' aria-describedby="courseHelp" value={this.state.courseHours} onChange={e => this.change(e)} />
                        <small id="courseHelp" class="form-text" style={{color: "black"}}>Amount of hours the course takes up</small>
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
                        <legend>Grading Attributes</legend>
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
                <button type="submit" class="btn btn-primary" onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        )
    }

}
