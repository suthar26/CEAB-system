import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Table from 'react-bootstrap/Table';

export default class Table3_1_2 extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.data != null) {
            this.state = this.props.data;
        }
        else {
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
                lifeAdv: ''
            };
        }
        this.getTable();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
        let name = event.target.name;

        console.log(name);
        let val = event.target.value;
        this.setState({ [name]: val });
        console.log(this.state);
    }
    handleSubmit(event) {
        // let data = this.state;
        event.preventDefault();
        // var result = {}
        // for (var i in data) {
        //     var keys = i.split('.')
        //     keys.reduce(function (r, e, j) {
        //         return r[e] || (r[e] = isNaN(Number(keys[j + 1])) ? (keys.length - 1 == j ? data[i] : {}) : [])
        //     }, result)
        // }
        // this.state = (result);
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
            <div class="container">
                <Form autocomplete="on" onSubmit={this.handleSubmit}>
                    <h1>Table 3.1.2</h1>
                    <br />
                    <Form.Group controlId="formTable312">
                        <Form.Label><b>Course Graduate Attribute Relative Levels</b></Form.Label>
                        <p><small>Enter the course codes in the text boxes for the respective places, add a "," to seperate multiple courses for the same graduate attribute and relative level.</small></p>
                        <Table bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th><center>Graduate Attributes</center></th>
                                    <th colspan="3"><center>Relative Level</center></th>
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
                                    <td><Form.Control type="text" name="knowledgeIntro" onChange={this.handleChange} /></td>
                                    <td><Form.Control type="text" name="knowledgeImtermed" onChange={this.handleChange} /></td>
                                    <td><Form.Control type="text" name="knowledgeAdv" onChange={this.handleChange} /></td>
                                </tr>
                                <tr>
                                    <td>Problem Analysis</td>
                                    <td><Form.Control type="text" name="problemIntro" onChange={this.handleChange} /></td>
                                    <td><Form.Control type="text" name="problemIntermed" onChange={this.handleChange} /></td>
                                    <td><Form.Control type="text" name="problemAdv" onChange={this.handleChange} /></td>
                                </tr>
                                <tr>
                                    <td>Investigation</td>
                                    <td><Form.Control type="text" name="investIntro" onChange={this.handleChange} /></td>
                                    <td><Form.Control type="text" name="investIntermed" onChange={this.handleChange} /></td>
                                    <td><Form.Control type="text" name="investAdv" onChange={this.handleChange} /></td>
                                </tr>
                                <tr>
                                    <td>Design</td>
                                    <td><Form.Control type="text" name="designIntro" onChange={this.handleChange} /></td>
                                    <td><Form.Control type="text" name="designIntermed" onChange={this.handleChange} /></td>
                                    <td><Form.Control type="text" name="designAdv" onChange={this.handleChange} /></td>
                                </tr>
                                <tr>
                                    <td>Use of Engineering Tools</td>
                                    <td><Form.Control type="text" name="engIntro" onChange={this.handleChange} /></td>
                                    <td><Form.Control type="text" name="engIntermed" onChange={this.handleChange} /></td>
                                    <td><Form.Control type="text" name="engAdv" onChange={this.handleChange} /></td>
                                </tr>
                                <tr>
                                    <td>Individual and Team Work</td>
                                    <td><Form.Control type="text" name="workIntro" onChange={this.handleChange} /></td>
                                    <td><Form.Control type="text" name="workIntermed" onChange={this.handleChange} /></td>
                                    <td><Form.Control type="text" name="workAdv" onChange={this.handleChange} /></td>
                                </tr>
                                <tr>
                                    <td>Communication</td>
                                    <td><Form.Control type="text" name="commIntro" onChange={this.handleChange} /></td>
                                    <td><Form.Control type="text" name="commIntermed" onChange={this.handleChange} /></td>
                                    <td><Form.Control type="text" name="commAdv" onChange={this.handleChange} /></td>
                                </tr>
                                <tr>
                                    <td>Professionalism</td>
                                    <td><Form.Control type="text" name="profIntro" onChange={this.handleChange} /></td>
                                    <td><Form.Control type="text" name="profIntermed" onChange={this.handleChange} /></td>
                                    <td><Form.Control type="text" name="profAdv" onChange={this.handleChange} /></td>
                                </tr>
                                <tr>
                                    <td>Impact of Engineering on Society and the Environment</td>
                                    <td><Form.Control type="text" name="engsocIntro" onChange={this.handleChange} /></td>
                                    <td><Form.Control type="text" name="engsocIntermed" onChange={this.handleChange} /></td>
                                    <td><Form.Control type="text" name="engsocAdv" onChange={this.handleChange} /></td>
                                </tr>
                                <tr>
                                    <td>Ethics and Equity</td>
                                    <td><Form.Control type="text" name="ethicsIntro" onChange={this.handleChange} /></td>
                                    <td><Form.Control type="text" name="ethicsIntermed" onChange={this.handleChange} /></td>
                                    <td><Form.Control type="text" name="ethicsAdv" onChange={this.handleChange} /></td>
                                </tr>
                                <tr>
                                    <td>Economics and Project Management</td>
                                    <td><Form.Control type="text" name="econIntro" onChange={this.handleChange} /></td>
                                    <td><Form.Control type="text" name="econIntermed" onChange={this.handleChange} /></td>
                                    <td><Form.Control type="text" name="econAdv" onChange={this.handleChange} /></td>
                                </tr>
                                <tr>
                                    <td>Life-Long Learning</td>
                                    <td><Form.Control type="text" name="lifeIntro" onChange={this.handleChange} /></td>
                                    <td><Form.Control type="text" name="lifeIntermed" onChange={this.handleChange} /></td>
                                    <td><Form.Control type="text" name="lifeAdv" onChange={this.handleChange} /></td>
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