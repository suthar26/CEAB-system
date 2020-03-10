import React from 'react';

export default class InstructorInfo extends React.Component {
    state = {
        familyName: '',
        firstName: '',
        acadRank: '',
        hireDate: '',
        highestDegree: '',
        awardDate: '',
        awardingHEI: '',
        country: '',
        licStatus: '',
        awardingCA: '',
        hqpSupervised: '',
        yearsNonAcademicExp: '',
        typeNonAcademicExp: '',
    }

    //gets the values entered by user and set it state variables above
    change = e => {
        this.setState(
            { [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        //pass this.state variables to App.js or do something with them
        //console.log(this.state)
    };
    render() {
        return (
            <form style={divStyle}>
                <label for="familyName">Family Name:</label>
                <input name="familyName" placeholder='Family Name' value={this.state.familyName} onChange={e => this.change(e)} />&nbsp;&nbsp;
                <label for="firstName">First Name:</label>
                <input name="firstName" placeholder='First Name' value={this.state.firstName} onChange={e => this.change(e)} />&nbsp;&nbsp;
                <br/>
                <label for="acadRank">Academic Rank:</label>
                <select id="acadRank">
                    <option value="full">Full</option>
                    <option value="assoc">Associate</option>
                    <option value="asst">Assistant</option>
                    <option value="emer">Emer</option>
                    <option value="adj">Adj</option>
                    <option value="srLec">Senior Lecturer</option>
                    <option value="jrLec">Junior Lecturer</option>
                    <option value="sess">Sess</option>
                    <option value="other">Other</option>
                </select>&nbsp;&nbsp;
                <label for="hireDate">Hire Date:</label>
                <select id="hireDate">
                    <option value="<2011">&#60;2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                </select>
                <br/>
                <label for="highestDegree">Highest Degree:</label>
                <select id="highestDegree">
                    <option value="DPhil">DPhil</option>
                    <option value="DSc">DSc</option>
                    <option value="PhD">PhD</option>
                    <option value="MPhil">MPhil</option>
                    <option value="MSc">MSc</option>
                    <option value="MEng">MEng</option>
                    <option value="MA">MA</option>
                    <option value="BSc">BSc</option>
                    <option value="BEng">BEng</option>
                    <option value="BA">BA</option>
                    <option value="Other">Other</option>
                </select>&nbsp;&nbsp;
                <label for="awardDate">Award Date:</label>
                <select id="awardDate">
                    <option value="<1970">&#60;1970</option>
                    <option value="1971">1971</option>
                    <option value="1972">1972</option>
                    <option value="1973">1973</option>
                    <option value="1974">1974</option>
                    <option value="1975">1975</option>
                    <option value="1976">1976</option>
                    <option value="1977">1977</option>
                    <option value="1978">1978</option>
                    <option value="1979">1979</option>
                    <option value="1980">1980</option>
                    <option value="1981">1981</option>
                    <option value="1982">1982</option>
                    <option value="1983">1983</option>
                    <option value="1984">1984</option>
                    <option value="1985">1985</option>
                    <option value="1986">1986</option>
                    <option value="1987">1987</option>
                    <option value="1988">1988</option>
                    <option value="1989">1989</option>
                    <option value="1990">1990</option>
                    <option value="1991">1991</option>
                    <option value="1992">1992</option>
                    <option value="1993">1993</option>
                    <option value="1994">1994</option>
                    <option value="1995">1995</option>
                    <option value="1996">1996</option>
                    <option value="1997">1997</option>
                    <option value="1998">1998</option>
                    <option value="1999">1999</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                </select>
                <br/>
                <label for="awardingHEI">Awarding HEI:</label>
                <select id="awardingHEI">
                    <option value="BCIT">BCIT</option>
                    <option value="carleton">Carleton</option>
                    <option value="concordia">Concordia</option>
                    <option value="conestoga">Conestoga</option>
                    <option value="dalhousie">Dalhousie</option>
                    <option value="ETS">ETS</option>
                    <option value="lakehead">Lakehead</option>
                    <option value="laurentian">Laurentian</option>
                    <option value="laval">Laval</option>
                    <option value="mcGill">McGill</option>
                    <option value="mcMaster">McMaster</option>
                    <option value="memorial">Memorial</option>
                    <option value="moncton">Moncton</option>
                    <option value="NSTC">NSTC</option>
                    <option value="polytechnique">Polytechnique</option>
                    <option value="queens">Queens</option>
                    <option value="RMC">RMC</option>
                    <option value="RPI">RPI</option>
                    <option value="RPU">RPU</option>
                    <option value="ryerson">Ryerson</option>
                    <option value="SFU">SFU</option>
                    <option value="SGW">SGW</option>
                    <option value="sherbrooke">Sherbrooke</option>
                    <option value="TUNS">TUNS</option>
                    <option value="UBC">UBC</option>
                    <option value="UBCO">UBC (Okanagan)</option>
                    <option value="UNB">UNB</option>
                    <option value="UNBC">UNBC</option>
                    <option value="UofA">UofA</option>
                    <option value="UofC">UofC</option>
                    <option value="UofG">UofG</option>
                    <option value="UofM">UofM</option>
                    <option value="UofR">UofR</option>
                    <option value="UofS">UofS</option>
                    <option value="UofT">UofT</option>
                    <option value="UOIT">UOIT</option>
                    <option value="UOttawa">UOttawa</option>
                    <option value="UPEI">UPEI</option>
                    <option value="UQAC">UQAC</option>
                    <option value="UQAM">UQAM</option>
                    <option value="UQAR">UQAR</option>
                    <option value="UQAT">UQAT</option>
                    <option value="UQO">UQO</option>
                    <option value="UQTR">UQTR</option>
                    <option value="UVic">UVic</option>
                    <option value="waterloo">Waterloo</option>
                    <option value="western">Western</option>
                    <option value="windsor">Windsor</option>
                    <option value="york">York</option>
                    <option value="other">Other</option>
                </select>&nbsp;&nbsp;
                <label for="country">Country:</label>
                <select id="country">
                    <option value="argentina">Argentina</option>
                    <option value="australia">Australia</option>
                    <option value="austria">Austria</option>
                    <option value="bangladesh">Bangladesh</option>
                    <option value="belgium">Belgium</option>
                    <option value="bolivia">Bolivia</option>
                    <option value="brazil">Brazil</option>
                    <option value="bulgaria">Bulgaria</option>
                    <option value="canada">Canada</option>
                    <option value="chile">Chile</option>
                    <option value="china">China</option>
                    <option value="columbia">Columbia</option>
                    <option value="costaRica">Costa Rica</option>
                    <option value="croatia">Croatia</option>
                    <option value="cyprus">Cyprus</option>
                    <option value="czechRepublic">Czech Republic</option>
                    <option value="denmark">Denmark</option>
                    <option value="ecuador">Ecuador</option>
                    <option value="estonia">Estonia</option>
                    <option value="finland">Finland</option>
                    <option value="france">France</option>
                    <option value="germany">Germany</option>
                    <option value="greece">Greece</option>
                    <option value="guyana">Guyana</option>
                    <option value="hongKong">Hong Kong</option>
                    <option value="hunary">Hunary</option>
                    <option value="india">India</option>
                    <option value="ireland">Ireland</option>
                    <option value="italy">Italy</option>
                    <option value="latvia">Latvia</option>
                    <option value="lithuania">Lithuania</option>
                    <option value="luxembourg">Luxembourg</option>
                    <option value="malaysia">Malaysia</option>
                    <option value="malta">Malta</option>
                    <option value="netherlands">Netherlands</option>
                    <option value="newZealand">New Zealand</option>
                    <option value="norway">Norway</option>
                    <option value="pakistan">Pakistan</option>
                    <option value="paraguay">Paraguay</option>
                    <option value="peru">Peru</option>
                    <option value="philippines">Philippines</option>
                    <option value="poland">Poland</option>
                    <option value="portugal">Portugal</option>
                    <option value="romania">Romania</option>
                    <option value="russia">Russia</option>
                    <option value="singapore">Singapore</option>
                    <option value="slovakia">Slovakia</option>
                    <option value="slovenia">Slovenia</option>
                    <option value="southAfrica">South Africa</option>
                    <option value="southKorea">South Korea</option>
                    <option value="spain">Spain</option>
                    <option value="sirLanka">Sir Lanka</option>
                    <option value="suriname">Suriname</option>
                    <option value="sweden">Sweden</option>
                    <option value="taiwan">Taiwan</option>
                    <option value="turkey">Turkey</option>
                    <option value="unitedKingdom">United Kingdom</option>
                    <option value="unitedStates">United States</option>
                    <option value="other">Other</option>
                </select>
                <br/>
                <label for="licStatus">Lic. Status:</label>
                <select id="licStatus">
                    <option value="EIT">EIT</option>
                    <option value="ingJr">ingJr</option>
                    <option value="ing">ing</option>
                    <option value="LL">LL</option>
                    <option value="PEng">PEng</option>
                    <option value="None">None</option>
                </select>
                <br/>
                <label for="awardingCA">Awarding HEI:</label>
                <select id="awardingHEI">
                    <option value="APEGA">APEGA</option>
                    <option value="APEGS">APEGS</option>
                    <option value="EGBC">Engineers Geoscientists British Columbia</option>
                    <option value="EGM">Engineers Geoscientists Manitoba</option>
                    <option value="EGNB">Engineers Geoscientists New Brunswick</option>
                    <option value="EGNS">Engineers Nova Soctia</option>
                    <option value="EGP">Engineers PEI</option>
                    <option value="EGY">Engineers Yukon</option>
                    <option value="NAPEG">NAPEG</option>
                    <option value="OIQ">OIQ</option>
                    <option value="PEGNL">PEGNL</option>
                    <option value="PEO">PEO</option>
                    <option value="None">None</option>
                </select>
                <br/>
                <label for="hqpSupervised">HQP Supervised Last 6 Years:</label>
                <select id="hireDate">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11-20">11-20</option>
                    <option value=">20">&#62;20</option>
                </select>
                <br/>
                <label for="yearsNonAcademicExp">Years of Non-Academic Experience:</label>
                <select id="yearsNonAcademicExp">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11-20">11-20</option>
                    <option value=">20">&#62;20</option>
                </select>
                <br/>
                <fieldset>
                    <legend>Type(s) of Non-Academic Experience:</legend>
                    <p>
                        <label><input type="checkbox"  name="typeNonAcademicExp" value="government"/>Government</label>
                        <br />
                        <label><input type="checkbox"  name="typeNonAcademicExp" value="industry"/>Industry</label>
                        <br />
                        <label><input type="checkbox"  name="typeNonAcademicExp" value="consulting"/>Consulting</label>
                        <br />
                        <label><input type="checkbox"  name="typeNonAcademicExp" value="research"/>Research</label>
                        <br />
                        <label><input type="checkbox"  name="typeNonAcademicExp" value="Other"/>Other</label>
                        <br />
                    </p>
                </fieldset>
                <br/>
                <br/>
                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        )
    }



}

        const divStyle = {
        padding: '20px'};