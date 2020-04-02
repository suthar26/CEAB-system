import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseID: '',
            instructorName: '',
            courseCode: ''
        };
        this.textInput = React.createRef();

    }
    componentDidMount() {
    }
    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    linkRef = React.createRef();
    downloadFile = () => {
            fetch('/api/downloadCourses')
                .then(response => {
                        response.blob().then(blob => {
                            let url = window.URL.createObjectURL(blob);
                            let a = document.createElement('a');
                            a.href = url;
                            a.download = 'courses.csv';
                            a.click();
                        });
                    })
            }

    newPage = (tabName) => {
        this.props.changeData(null);
        this.props.changeTab(tabName);
    }

    render() {
        return (
            <div class="container" >

                <h1>Upload Files</h1>
                <input type="file" name="file" onChange={this.onChangeHandler} />

                <h1>Download Files </h1>
                <InputGroup>
                    <InputGroup.Append>
                        <Button variant="primary" onClick={() => this.downloadFile()} ref={this.linkRef}>Download Courses (.csv)</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        )
    }



}

const divStyle = {
    padding: '20px'
};