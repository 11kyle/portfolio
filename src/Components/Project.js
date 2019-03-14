import React, { Component } from 'react';

class Project extends Component {
    render() {
        const { title, picture, description, link } = this.props;
        return (
            <div className="col-sm-4 d-flex align-items-stretch">
                <a href={link} className="card border border-secondary d-flex align-items-stretch mb-3 mx-auto">
                    <img src={picture} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">{title}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                </a>
            </div>
        );
    }
}

export default Project;