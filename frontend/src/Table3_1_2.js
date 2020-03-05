import React from 'react';

export default class Table3_1_2 extends React.Component {

    onSubmit = e => {
        e.preventDefault();
    };

    render() {
        return (
            <form style={{backgroundColor: "#778899"}} autocomplete="on">
                <div class="form-group">
                    <h2 style={{marginLeft: "10px"}}>Table 3.1.2</h2>
                    <p style={{marginLeft: "10px"}}>Enter the course codes in the text boxes for the respective places, add a "," to seperate multiple courses for the same graduate attribute and relative level.</p>
                    <table style={{border: "collapse", width: "100%",margin: "0.5px"}}>
                        <tr>
                            <th style={{border: "1px solid #dddddd"}}>Graduate Attributes</th>
                            <th style={{border: "1px solid #dddddd"}} colspan="3"><center>Relative Level</center></th>
                        </tr>
                        <tr>
                            <th style={{border: "1px solid #dddddd"}}></th>
                            <th style={{border: "1px solid #dddddd"}}><center>Introductory</center></th>
                            <th style={{border: "1px solid #dddddd"}}><center>Intermediate</center></th>
                            <th style={{border: "1px solid #dddddd"}}><center>Advanced</center></th>
                        </tr>
                        <tr>
                            <td style={{border: "1px solid #dddddd"}}>Knowledge base</td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="IntroKnowledge" name="IntroKnowledge"/></center></td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="IntermedKnowledge" name="IntermedKnowledge"/></center></td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="AdvKnowledge" name="AdvKnowledge"/></center></td>
                        </tr>
                        <tr>
                            <td style={{border: "1px solid #dddddd"}}>Problem analysis</td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="IntroProblem" name="IntroProblem"/></center></td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="IntermedProblem" name="IntermedProblem"/></center></td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="AdvProblem" name="AdvProblem"/></center></td>
                        </tr>
                        <tr>
                            <td style={{border: "1px solid #dddddd"}}>Investigation</td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="IntroInvest" name="IntroInvest"/></center></td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="InterInvest" name="InterInvest"/></center></td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="AdvInvest" name="AdvInvest"/></center></td>
                        </tr>
                        <tr>
                            <td style={{border: "1px solid #dddddd"}}>Design</td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="IntroDesign" name="IntroDesign"/></center></td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="InterDesign" name="InterDesign"/></center></td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="AdvDesign" name="AdvDesign"/></center></td>
                        </tr>
                        <tr>
                            <td style={{border: "1px solid #dddddd"}}>Use of engineering tools</td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="IntroEng" name="IntroEng"/></center></td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="InterEng" name="InterEng"/></center></td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="AdvEng" name="AdvEng"/></center></td>
                        </tr>
                        <tr>
                            <td style={{border: "1px solid #dddddd"}}>Individual and team work</td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="IntroWork" name="IntroWork"/></center></td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="InterWork" name="InterWork"/></center></td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="AdvWork" name="AdvWork"/></center></td>
                        </tr>
                        <tr>
                            <td style={{border: "1px solid #dddddd"}}>Communication</td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="IntroComm" name="IntroComm"/></center></td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="InterComm" name="InterComm"/></center></td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="AdvComm" name="AdvComm"/></center></td>
                        </tr>
                        <tr>
                            <td style={{border: "1px solid #dddddd"}}>Professionalism</td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="IntroProf" name="IntroProf"/></center></td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="InterProf" name="InterProf"/></center></td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="AdvProf" name="AdvProf"/></center></td>
                        </tr>
                        <tr>
                            <td style={{border: "1px solid #dddddd"}}>Impact of engineering on society and the environment</td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="IntroEngSoc" name="IntroEngSoc"/></center></td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="InterEngSoc" name="InterEngSoc"/></center></td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="AdvEngSoc" name="AdvEngSoc"/></center></td>
                        </tr>
                        <tr>
                            <td style={{border: "1px solid #dddddd"}}>Ethics and equity</td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="IntroEthics" name="IntroEthics"/></center></td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="InterEthics" name="InterEthics"/></center></td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="AdvEthics" name="AdvEthics"/></center></td>
                        </tr>
                        <tr>
                            <td style={{border: "1px solid #dddddd"}}>Economics and project management</td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="IntroEcon" name="IntroEcon"/></center></td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="InterEcon" name="InterEcon"/></center></td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="AdvEcon" name="AdvEcon"/></center></td>
                        </tr>
                        <tr>
                            <td style={{border: "1px solid #dddddd"}}>Life-long learning</td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="IntroLife" name="IntroLife"/></center></td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="InterLife" name="InterLife"/></center></td>
                            <td style={{border: "1px solid #dddddd"}}><center><input type="text" id="AdvLife" name="AdvLife"/></center></td>
                        </tr>
                    </table>
                </div>
                <br />
                <button type="submit" class="btn btn-primary" onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        )
    }
}