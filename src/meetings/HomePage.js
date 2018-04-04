import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import Meeting from './Meeting'

import {fetchMeetings} from "./actions";

class HomePage extends Component {

  componentDidMount() {
    this.props.loadMeetings();
  }

  render() {
    const listItems = this.props.meetings.map(meeting =>
      <Meeting meeting={meeting} />
    );
    return (
      <div>
        <Paper zDepth={1}>
          {listItems}
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    meetings: state.meetings.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadMeetings: () => dispatch(fetchMeetings())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
