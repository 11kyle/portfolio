import React, { Component } from 'react';
import github from '../github.png';
import linkedin from '../linkedin.png';
import pdf from '../pdf.png';

class Footer extends Component {
    render() {
        return (
            <div className="col text-center my-5">
                <a href="https://github.com/11kyle"><img src={github} alt="github" className="icon" /></a>
                <a href="https://www.linkedin.com/in/kylejohnson11/"><img src={linkedin} alt="linkedin" className="icon mx-2" /></a>
                <a href="#"><img src={pdf} alt="download resume" className="icon" /></a>
            </div>
        );
    }
}

export default Footer;