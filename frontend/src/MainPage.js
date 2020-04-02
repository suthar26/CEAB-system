import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
// import Input from 'react-bootstrap/Input';
import FormControl from 'react-bootstrap/FormControl';


export default class MainPage extends React.Component {
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
    componentDidMount() {
    }
    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    onChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }

    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post('http://localhost:3001/api/upload', data)
        .then((result) => {
          console.log(result)
        });

    }



      onSubmit = (e) => {
        e.preventDefault();
        const { description, selectedFile } = this.state;
        let formData = new FormData();
  
        formData.append('description', description);
        formData.append('selectedFile', selectedFile);
  
        axios.post('/api/uploadCsv', formData)
          .then((result) => {
            console.log(result)
          });
      }
    changeFile = (event) => {
        this.setState({
            csv: event.target.files[0]
        });
        let formData = new FormData();
        formData.append('file', this.state.csv);
        let options = {
            method: 'POST',
            headers: {
                "Authorization": localStorage.getItem("token")
            },
            body: formData
        }
        fetch(`http://localhost:3000/api/v1/csvs`, options)
            .then(resp => resp.json())
            .then(result => {
                alert(result.message)
            })
    }
    linkRef = React.createRef();
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

    newPage = (tabName) => {
        this.props.changeData(null);
        this.props.changeTab(tabName);
    }

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