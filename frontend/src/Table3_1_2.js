import React from 'react';
import axios from 'axios';

export default class Table3_1_2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            knowledgeIntro: '',
            knowledgeImtermed: '',
            knowledgeAdv: '',
            problemIntro: '',
            problemIntermed: '',
            problemAdv: '',
            investIntro: '',
            investIntermed: '',
            investAdv: '',
            designIntro: '',
            designInter: '',
            designAdv: '',
            engIntro: '',
            engIntermed: '',
            engAdv: '',
            workIntro: '',
            workIntermed: '',
            workAdv: '',
            commIntro: '',
            commIntermed: '',
            commAdv: '',
            profIntro: '',
            profIntermed: '',
            profAdv: '',
            engsocIntro: '',
            engsocIntermed: '',
            engsocAdv: '',
            ethicsIntro: '',
            ethicsIntermed: '',
            ethicsAdv: '',
            econIntro: '',
            econIntermed: '',
            econAdv: '',
            lifeIntro: '',
            lifeIntermed: '',
            lifeAdv: '',
        };
        this.getTable();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
        let name = event.target.name;
        
        console.log(name);
        let val = event.target.value;
        this.setState({[name]: val});
        console.log(this.state);
    }
    handleSubmit(event) {
        let data = this.state;
        event.preventDefault();
        var result = {}
        for (var i in data) {
            var keys = i.split('.')
            keys.reduce(function (r, e, j) {
                return r[e] || (r[e] = isNaN(Number(keys[j + 1])) ? (keys.length - 1 == j ? data[i] : {}) : [])
            }, result)
        }
        this.state = (result);
        axios.post('/api/submitTable', {
            courses: this.state
        }).then(alert("Saved"));
        window.location.reload();
    }
    getTable = () => {
        fetch('/api/getTable')
            .then((data) => data.json())
            .then((res) => this.setState({ data: res.data }));
    }

    render() {
        return (
            <form style={{ backgroundColor: "#778899" }} class="container" autocomplete="on" onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <h2 style={{ marginLeft: "10px" }}>Table 3.1.2</h2>
                    <p style={{ marginLeft: "10px" }}>Enter the course codes in the text boxes for the respective places, add a "," to seperate multiple courses for the same graduate attribute and relative level.</p>
                    <table style={{ border: "collapse", width: "100%", margin: "0.5px" }}>
                        <tr>
                            <th style={{ border: "1px solid #dddddd" }}>Graduate Attributes</th>
                            <th style={{ border: "1px solid #dddddd" }} colspan="3"><center>Relative Level</center></th>
                        </tr>
                        <tr>
                            <th style={{ border: "1px solid #dddddd" }}></th>
                            <th style={{ border: "1px solid #dddddd" }}><center>Introductory</center></th>
                            <th style={{ border: "1px solid #dddddd" }}><center>Intermediate</center></th>
                            <th style={{ border: "1px solid #dddddd" }}><center>Advanced</center></th>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #dddddd" }}>Knowledge base</td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntroKnowledge" name="knowledgeIntro" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntermedKnowledge" name="knowledgeImtermed" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="AdvKnowledge" name="knowledgeAdv" onChange={this.handleChange} /></center></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #dddddd" }}>Problem analysis</td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntroProblem" name="problemIntro" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntermedProblem" name="problemIntermed" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="AdvProblem" name="problemAdv" onChange={this.handleChange} /></center></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #dddddd" }}>Investigation</td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntroInvest" name="investIntro" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="InterInvest" name="investIntermed" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="AdvInvest" name="investAdv" onChange={this.handleChange} /></center></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #dddddd" }}>Design</td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntroDesign" name="designIntro" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="InterDesign" name="designInter" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="AdvDesign" name="designAdv" onChange={this.handleChange} /></center></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #dddddd" }}>Use of engineering tools</td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntroEng" name="engIntro" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="InterEng" name="engIntermed" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="AdvEng" name="engAdv" onChange={this.handleChange} /></center></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #dddddd" }}>Individual and team work</td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntroWork" name="workIntro" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="InterWork" name="workIntermed" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="AdvWork" name="workAdv" onChange={this.handleChange} /></center></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #dddddd" }}>Communication</td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntroComm" name="commIntro" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="InterComm" name="commIntermed" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="AdvComm" name="commAdv" onChange={this.handleChange} /></center></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #dddddd" }}>Professionalism</td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntroProf" name="profIntro" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="InterProf" name="profIntermed" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="AdvProf" name="profAdv" onChange={this.handleChange} /></center></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #dddddd" }}>Impact of engineering on society and the environment</td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntroEngSoc" name="engsocIntro" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="InterEngSoc" name="engsocIntermed" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="AdvEngSoc" name="engsocAdv" onChange={this.handleChange} /></center></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #dddddd" }}>Ethics and equity</td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntroEthics" name="ethicsIntro" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="InterEthics" name="ethicsIntermed" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="AdvEthics" name="ethicsAdv" onChange={this.handleChange} /></center></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #dddddd" }}>Economics and project management</td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntroEcon" name="econIntro" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="InterEcon" name="econIntermed" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="AdvEcon" name="econAdv" onChange={this.handleChange} /></center></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #dddddd" }}>Life-long learning</td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntroLife" name="lifeIntro" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="InterLife" name="lifeIntermed" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="AdvLife" name="lifeAdv" onChange={this.handleChange} /></center></td>
                        </tr>
                    </table>
                </div>
                <br />
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        )
    }
}