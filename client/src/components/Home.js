import React, {Component} from "react";
import {Link} from "react-router-dom";
import Navigation from './Navigation';

class Home extends Component {


    render() {
        return(
            <div>
                <div>
                    <Navigation />
                    <h1>resumeRise</h1>
                </div>
                <div className="grid-1-col mb-5 mt-5">
                    <p>Please click to get started</p>
                </div>
                <Link to="/personalInfo" className='btn next'>Personal Information</Link>
            </div>
        )
    }
}

export default Home;