import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchForm from './SearchForm';
import PropTypes from 'prop-types';
import MeetingsList from './MeetingsList';
import {fetchMeetings, searchMeetings} from "./actions";

class HomePage extends Component {
  componentDidMount() {
    this.props.loadMeetings(this.props.fromDate, this.props.toDate, 1);
  }

  searchMeetings = (fromDate, toDate) => {
    this.props.searchMeetings(fromDate, toDate, 1);
  };

  loadPaginatedMeetings = (page) => {
    this.props.loadMeetings(this.props.fromDate, this.props.toDate, page);
  };

  render() {
    return (
      <div>
        <SearchForm onSubmit={this.searchMeetings} fromDate={this.props.fromDate} toDate={this.props.toDate}/>
        <MeetingsList {...this.props} loadMore={this.loadPaginatedMeetings} />
      </div>
    );
  }
}

HomePage.propTypes = {
  meetings: PropTypes.array,
  fromDate: PropTypes.instanceOf(Date),
  toDate: PropTypes.instanceOf(Date),
  loadMeetings: PropTypes.func,
  searchMeetings: PropTypes.func,
  pages: PropTypes.number,
  currentPage: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    meetings: state.meetings.list,
    fromDate: state.meetings.fromDate,
    toDate: state.meetings.toDate,
    currentPage: state.meetings.page,
    pages: state.meetings.pages
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadMeetings: (fromDate, toDate, page) => dispatch(fetchMeetings(fromDate, toDate, page)),
    searchMeetings: (fromDate, toDate, page) => dispatch(searchMeetings(fromDate, toDate, page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
