import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <h1>Truth</h1>
        </Link>
        <div>
            <Link to="/pendingpolls" className="btn btn-primary">
              Pending Polls
            </Link>
            <Link to="/resultspolls" className="btn btn-primary">
              Results Polls
            </Link>
            <Link to="/createpoll" className="btn btn-primary">
              Create Poll
            </Link>
            <Link to="/logout" className="btn btn-primary">
              Logout
            </Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}
