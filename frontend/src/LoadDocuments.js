//CEAB Helper app to assist with making the documents required to be an accredited for engineering
//Group 3
//3/4/20

import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class LoadDocuments extends React.Component {

    //constructor that creates the state and binds the submit and update methods
        constructor(props) {
            super(props);
            this.state = {
                courseID: '',
                instructorName: '',
                courseCode: '',
                selectedFile: null
            };
            this.textInput = React.createRef();
            this.handleSubmit = this.onSubmit.bind(this);
        }
        componentDidMount() {}
        handleChange = e => this.setState({
            [e.target.name]: e.target.value
        });

        //gets the values entered by user and sets it the corresponding state variable
        onChange = (event) => {
            this.setState({
                selectedFile: event.target.files[0],
                loaded: 0,
            })
        }

        //calls api to save the uploaded file
        onClickHandler = () => {
            const data = new FormData()
            data.append('file', this.state.selectedFile)
            axios.post('/api/upload', data)
                .then((result) => {
                    console.log(result)
                }).then(alert("Saved"));
                this.props.changeTab('MainPage');

        }


        //calls api with post request to save the form, and then reloads to the main page
        onSubmit = (e) => {
            e.preventDefault();
            const {
                description,
                selectedFile
            } = this.state;
            let formData = new FormData();

            formData.append('description', description);
            formData.append('selectedFile', selectedFile);

            axios.post('/api/uploadCsv', formData).then(alert('Uploaded'));
        }
        
        linkRef = React.createRef();

        //calls api to get the file to download, then downloads the file
        downloadCourses = () => {
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

        //calls api to get the table to download, then downloads the table
        downloadTable = () => {
            fetch('/api/downloadTable')
                .then(response => {
                    response.blob().then(blob => {
                        let url = window.URL.createObjectURL(blob);
                        let a = document.createElement('a');
                        a.href = url;
                        a.download = 'table3.2.1-helper.csv';
                        a.click();
                    });
                })
        }

    //renders load documents tab
    render() {
        return (
            <div class="container" >

                <h1>Upload Files</h1>
                <input
                    type="file"
                    ref={(input) => { this.filesInput = input }}
                    name="file"
                    icon='file text outline'
                    iconPosition='left'
                    label='Upload CSV'
                    labelPosition='right'
                    placeholder='UploadCSV...'
                    onChange={this.onChange}
                    />
                    <Button variant='primary' onClick={this.onClickHandler}>Upload</Button> 
                 <h1>Download Files </h1>
                <Button variant="primary" onClick={() => this.downloadCourses()} ref={this.linkRef}>Download Courses (.csv)</Button>
                <br></br>
                <Button variant="primary" onClick={() => this.downloadTable()} ref={this.linkRef}>Download Table Helper (.csv)</Button>
            </div>
        )
    }



}

const divStyle = {
    padding: '20px'
};