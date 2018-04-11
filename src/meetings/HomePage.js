import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import Meeting from './Meeting';
import SearchForm from './SearchForm';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import {ListItems as ListItemsStyle, Loader as LoaderStyle} from "./HomePage.css";

import {fetchMeetings} from "./actions";

class HomePage extends Component {
  hasMore = true;
  submit = (fromDate, toDate) => {
    this.loadPaginatedMeetings(fromDate, toDate);
  };

  loadPaginatedMeetings = (page) => {
    this.props.loadMeetings(this.props.fromDate, this.props.toDate, page);
  };

  render() {
    const listItems = this.props.meetings.map(meeting =>
      <Meeting key={meeting._id} meeting={meeting}/>
    );

    this.hasMore = this.props.currentPage < this.props.pages;
    return (
      <div>
        <SearchForm onSubmit={this.submit} fromDate={this.props.fromDate} toDate={this.props.toDate}/>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadPaginatedMeetings}
          hasMore={this.hasMore}
          loader={<div style={LoaderStyle} className="loader" key={0}>Loading ...</div>}
        >
          <Paper zDepth={1} style={ListItemsStyle}>
            {listItems}
          </Paper>
        </InfiniteScroll>
      </div>
    );
  }
}

HomePage.propTypes = {
  meetings: PropTypes.array,
  fromDate: PropTypes.instanceOf(Date),
  toDate: PropTypes.instanceOf(Date),
  loadMeetings: PropTypes.func,
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
    loadMeetings: (fromDate, toDate, page) => dispatch(fetchMeetings(fromDate, toDate, page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
