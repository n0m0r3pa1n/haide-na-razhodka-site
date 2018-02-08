import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchMeetings} from "../meetings/actions";

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>React Slingshot</h1>

        <h2>Get Started</h2>
        <ol>
          <li>Review the <Link to="/fuel-savings">demo app</Link></li>
          <li>Remove the demo and start coding: npm run remove-demo</li>
        </ol>
        <button onClick={this.props.onClickTest}>Test</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    meetings: state.meetings
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickTest: () => dispatch(fetchMeetings())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
