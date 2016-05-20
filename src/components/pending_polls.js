import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deletePoll } from '../actions/index';

class PendingPolls extends Component {
  //need to limit polls to like 20
  renderPendingPolls(pollsData) {
    return (
      <div>
        <div>
          <img src='https://developer.bluetooth.org/community/lists/community%20discussion/%22/_layouts/15/images/person.gif?rev=23%22'/>
          <h3>Does Joey smell bad?</h3>
          <div>
          <button className="btn btn-primary"> ls awful He smells awful He smells awful He smells awful He smells awful He smells awful </button>
          </div>
          <div>
          <button className="btn btn-primary">It's the worst smell ever two two two</button>
          </div>
          <div>
          <button className="btn btn-primary">It's ok</button>
          </div>
          <div>
          <button className="btn btn-primary">He's fine</button>
          </div>
        </div>
        <div>
          <img src='https://developer.bluetooth.org/community/lists/community%20discussion/%22/_layouts/15/images/person.gif?rev=23%22'/>
          <h3>Does Joey smell bad?</h3>
          <div>
          <button className="btn btn-primary"> ls awful He smells awful He smells awful He smells awful He smells awful He smells awful </button>
          </div>
          <div>
          <button className="btn btn-primary">It's the worst smell ever two two two</button>
          </div>
          <div>
          <button className="btn btn-primary">It's ok</button>
          </div>
          <div>
          <button className="btn btn-primary">He's fine</button>
          </div>
        </div>
        <div>
          <img src='https://developer.bluetooth.org/community/lists/community%20discussion/%22/_layouts/15/images/person.gif?rev=23%22'/>
          <h3>Does Joey smell bad?</h3>
          <div>
          <button className="btn btn-primary"> ls awful He smells awful He smells awful He smells awful He smells awful He smells awful </button>
          </div>
          <div>
          <button className="btn btn-primary">It's the worst smell ever two two two</button>
          </div>
          <div>
          <button className="btn btn-primary">It's ok</button>
          </div>
          <div>
          <button className="btn btn-primary">He's fine</button>
          </div>
        </div>
        <div>
          <img src='https://developer.bluetooth.org/community/lists/community%20discussion/%22/_layouts/15/images/person.gif?rev=23%22'/>
          <h3>Does Joey smell bad?</h3>
          <div>
          <button className="btn btn-primary"> ls awful He smells awful He smells awful He smells awful He smells awful He smells awful </button>
          </div>
          <div>
          <button className="btn btn-primary">It's the worst smell ever two two two</button>
          </div>
          <div>
          <button className="btn btn-primary">It's ok</button>
          </div>
          <div>
          <button className="btn btn-primary">He's fine</button>
          </div>
        </div>
        <div>
          <img src='https://developer.bluetooth.org/community/lists/community%20discussion/%22/_layouts/15/images/person.gif?rev=23%22'/>
          <h3>Does Joey smell bad?</h3>
          <div>
          <button className="btn btn-primary"> ls awful He smells awful He smells awful He smells awful He smells awful He smells awful </button>
          </div>
          <div>
          <button className="btn btn-primary">It's the worst smell ever two two two</button>
          </div>
          <div>
          <button className="btn btn-primary">It's ok</button>
          </div>
          <div>
          <button className="btn btn-primary">He's fine</button>
          </div>
        </div>
        <div>
          <img src='https://developer.bluetooth.org/community/lists/community%20discussion/%22/_layouts/15/images/person.gif?rev=23%22'/>
          <h3>Does Joey smell bad?</h3>
          <div>
          <button className="btn btn-primary"> ls awful He smells awful He smells awful He smells awful He smells awful He smells awful </button>
          </div>
          <div>
          <button className="btn btn-primary">It's the worst smell ever two two two</button>
          </div>
          <div>
          <button className="btn btn-primary">It's ok</button>
          </div>
          <div>
          <button className="btn btn-primary">He's fine</button>
          </div>
        </div>
        <div>
          <img src='https://developer.bluetooth.org/community/lists/community%20discussion/%22/_layouts/15/images/person.gif?rev=23%22'/>
          <h3>Does Joey smell bad?</h3>
          <div>
          <button className="btn btn-primary"> ls awful He smells awful He smells awful He smells awful He smells awful He smells awful </button>
          </div>
          <div>
          <button className="btn btn-primary">It's the worst smell ever two two two</button>
          </div>
          <div>
          <button className="btn btn-primary">It's ok</button>
          </div>
          <div>
          <button className="btn btn-primary">He's fine</button>
          </div>
        </div>
      </div>
    );
  }

  //{this.props.pendingPolls.map(this.renderPendingPolls)}
  render() {
    return (
      <div>

      {this.renderPendingPolls()}
      </div>
    );
  }
}



function mapStateToProps({ pendingPolls }) {
  return { pendingPolls };
}

//
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deletePoll }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PendingPolls);