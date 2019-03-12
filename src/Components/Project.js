import React, { Component } from 'react';

class Project extends Component {
    render() {
        return (
            <div className="col-sm-4">
                <div className="card mx-auto">
                    <img src={this.props.picture} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;