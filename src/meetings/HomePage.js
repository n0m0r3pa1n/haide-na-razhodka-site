import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import Meeting from './Meeting';
import SearchForm from './SearchForm';
import PropTypes from 'prop-types';

import {fetchMeetings} from "./actions";

const style = {
  marginTop: '10px',
  paddingBottom: '10px',
  display: 'flex',
  'flexDirection': 'row',
  'flexWrap': 'wrap',
  'justifyContent': 'flex-start',
  'alignItems': 'flex-start',
  'alignContent': 'flex-start'
};

class HomePage extends Component {

  submit = (fromDate, toDate) => {
    this.props.loadMeetings(fromDate, toDate);
  };

  componentDidMount() {
    const { loadMeetings, fromDate, toDate } = this.props;
    loadMeetings(fromDate, toDate);
  }

  render() {
    const listItems = this.props.meetings.map(meeting =>
      <Meeting key={meeting._id} meeting={meeting} />
    );

    return (
      <div>
        <SearchForm onSubmit={this.submit} fromDate={this.props.fromDate} toDate={this.props.toDate} />
        <Paper zDepth={1} style={style}>
          {listItems}
        </Paper>
      </div>
    );
  }
}

HomePage.propTypes = {
  meetings: PropTypes.array,
  fromDate: PropTypes.instanceOf(Date),
  toDate: PropTypes.instanceOf(Date),
  loadMeetings: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    meetings: state.meetings.list,
    fromDate: state.meetings.fromDate,
    toDate: state.meetings.toDate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadMeetings: (fromDate, toDate) => dispatch(fetchMeetings(fromDate, toDate))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
