import React, { Component } from 'react';

import Adrian from './images/Adrian.png';
import Dan from './images/Dan.png';
import Ivan from './images/Ivan.png';
import Oliver from './images/Oliver.png';
import Victor from './images/Victor.png';

class Team extends Component {
  renderTeamMember(name, role, imageUrl) {
    return (
      <div className="card">
        <div className="card-image">
          <img src={imageUrl} alt="" width={200} />
        </div>
        <div className="card-content">
          <p className="title is-4">{name}</p>
          <p className="subtitle is-6">{role}</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-size-1">Team</h1>
            <br />
            <div className="columns is-multiline is-mobile">
              <div className="column is-one-third-tablet is-half-mobile">
                {this.renderTeamMember('Adrian', 'Head of Staff', Adrian)}
              </div>
              <div className="column is-one-third-tablet is-half-mobile">
                {this.renderTeamMember('Dan', 'Head of Design', Dan)}
              </div>
              <div className="column is-one-third-tablet is-half-mobile">
                {this.renderTeamMember('Ivan', 'Fintech advisor', Ivan)}
              </div>
              <div className="column is-half-tablet is-half-mobile">
                {this.renderTeamMember('Oliver H.', 'Founder', Oliver)}
              </div>
              <div className="column is-half-tablet is-one-desktop">
                {this.renderTeamMember('Victor', 'Head of Engineering', Victor)}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;