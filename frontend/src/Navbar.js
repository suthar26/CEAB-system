import React from 'react';

//Renders navbar
class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar-expand-lg navbar navbar-dark bg-dark">
                <div class="navbar-brand">CEAB System</div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbar">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link" href='#' onClick={() => this.props.changeTab('CourseSyllabus')}>Course Syllabus</a>
                        <a class="nav-item nav-link" href='#' onClick={() => this.props.changeTab('Table3_1_2')}>Table 3.1.2</a>
                        <a class="nav-item nav-link" href='#' onClick={() => this.props.changeTab('InstructorInfo')}>Instructor Info</a>
                    </div>
                </div>
            </nav>
        )
    }
};

export default Navbar;