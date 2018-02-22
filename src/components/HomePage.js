import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchMeetings} from "../meetings/actions";
import { FlatButton } from 'material-ui';

class HomePage extends Component {
  render() {
    const listItems = this.props.meetings.map(x =>
      <li>{x.name}</li>
    );
    return (
      <div>
        <h1>React Slingshot</h1>

        <h2>Get Started</h2>
        <ol>
          <li>Review the <Link to="/fuel-savings">demo app</Link></li>
          <li>Remove the demo and start coding: npm run remove-demo</li>
        </ol>
        <FlatButton variant="raised" color="primary" onClick={this.props.onClickTest}>Test</FlatButton>
        {listItems}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    meetings: state.meetings.list
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickTest: () => dispatch(fetchMeetings())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
