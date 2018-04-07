import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import Meeting from './Meeting'

import {fetchMeetings} from "./actions";

const style = {
  display: 'flex',
  'flex-direction': 'row',
  'flex-wrap': 'wrap',
  'justify-content': 'flex-start',
  'align-items': 'flex-start',
  'align-content': 'flex-start'
};

class HomePage extends Component {

  componentDidMount() {
    this.props.loadMeetings();
  }

  render() {
    const listItems = this.props.meetings.map(meeting =>
      <Meeting key={meeting._id} meeting={meeting} />
    );

    return (
      <div>
        <Paper zDepth={1} style={style}>
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
