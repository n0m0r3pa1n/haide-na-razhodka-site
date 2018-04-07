import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import Meeting from './Meeting';
import SearchForm from './SearchForm';
import PropTypes from 'prop-types';

import {fetchMeetings} from "./actions";

const style = {
  display: 'flex',
  'flexDirection': 'row',
  'flexWrap': 'wrap',
  'justifyContent': 'flex-start',
  'alignItems': 'flex-start',
  'alignContent': 'flex-start'
};

class HomePage extends Component {

  submit = (fromDate, toDate) => {
    // print the form values to the console
    console.log(fromDate, toDate);
  };

  componentDidMount() {
    this.props.loadMeetings();
  }

  render() {
    const listItems = this.props.meetings.map(meeting =>
      <Meeting key={meeting._id} meeting={meeting} />
    );

    return (
      <div>
        <SearchForm onSubmit={this.submit} />
        <Paper zDepth={1} style={style}>
          {listItems}
        </Paper>
      </div>
    );
  }
}

HomePage.propTypes = {
  meetings: PropTypes.array,
  loadMeetings: PropTypes.func
};

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
