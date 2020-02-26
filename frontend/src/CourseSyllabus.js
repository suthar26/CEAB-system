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
            <form>
                <input name="courseName" placeholder='Course Name' value={this.state.courseName} onChange={e => this.change(e)} />&nbsp;&nbsp;
                <input name="instructorName" placeholder='Instructor Name' value={this.state.instructorName} onChange={e => this.change(e)} /> &nbsp;&nbsp;
                <input name="courseType" placeholder='Lec, Tut, Lab' value={this.state.courseType} onChange={e => this.change(e)} /> &nbsp;&nbsp;
                <input name="courseHours" placeholder='Course Hours (eg: 1.5)' value={this.state.courseHours} onChange={e => this.change(e)} />
                <br />
                <br />
                <textarea name="courseDescription" placeholder='Course Description' rows="7" cols="70" value={this.state.courseDescription} onChange={e => this.change(e)} />
                <br />
                <br />
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
                <br />
                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        )
    }

}