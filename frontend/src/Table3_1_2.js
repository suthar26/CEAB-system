import React from 'react';
import axios from 'axios';

export default class Table3_1_2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntroKnowledge" name="knowledge.intro" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntermedKnowledge" name="knowledge.imtermed" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="AdvKnowledge" name="knowledge.adv" onChange={this.handleChange} /></center></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #dddddd" }}>Problem analysis</td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntroProblem" name="problem.intro" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntermedProblem" name="problem.intermed" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="AdvProblem" name="problem.adv" onChange={this.handleChange} /></center></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #dddddd" }}>Investigation</td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntroInvest" name="invest.intro" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="InterInvest" name="invest.intermed" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="AdvInvest" name="invest.adv" onChange={this.handleChange} /></center></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #dddddd" }}>Design</td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntroDesign" name="design.intro" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="InterDesign" name="design.inter" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="AdvDesign" name="design.adv" onChange={this.handleChange} /></center></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #dddddd" }}>Use of engineering tools</td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntroEng" name="eng.intro" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="InterEng" name="eng.intermed" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="AdvEng" name="eng.adv" onChange={this.handleChange} /></center></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #dddddd" }}>Individual and team work</td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntroWork" name="work.intro" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="InterWork" name="work.intermed" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="AdvWork" name="work.adv" onChange={this.handleChange} /></center></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #dddddd" }}>Communication</td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntroComm" name="comm.intro" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="InterComm" name="comm.intermed" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="AdvComm" name="comm.adv" onChange={this.handleChange} /></center></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #dddddd" }}>Professionalism</td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntroProf" name="prof.intro" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="InterProf" name="prof.intermed" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="AdvProf" name="prof.adv" onChange={this.handleChange} /></center></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #dddddd" }}>Impact of engineering on society and the environment</td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntroEngSoc" name="engsoc.intro" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="InterEngSoc" name="engsoc.intermed" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="AdvEngSoc" name="engsoc.adv" onChange={this.handleChange} /></center></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #dddddd" }}>Ethics and equity</td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntroEthics" name="ethics.intro" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="InterEthics" name="ethics.intermed" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="AdvEthics" name="ethics.adv" onChange={this.handleChange} /></center></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #dddddd" }}>Economics and project management</td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntroEcon" name="econ.intro" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="InterEcon" name="econ.intermed" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="AdvEcon" name="econ.adv" onChange={this.handleChange} /></center></td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #dddddd" }}>Life-long learning</td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="IntroLife" name="life.intro" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="InterLife" name="life.intermed" onChange={this.handleChange} /></center></td>
                            <td style={{ border: "1px solid #dddddd" }}><center><input type="text" id="AdvLife" name="life.adv" onChange={this.handleChange} /></center></td>
                        </tr>
                    </table>
                </div>
                <br />
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        )
    }
}