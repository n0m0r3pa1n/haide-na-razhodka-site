import React, {Component} from 'react';
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroller';
import {ListItems as ListItemsStyle, Loader as LoaderStyle} from "./HomePage.css";
import * as _ from "lodash";
import Paper from 'material-ui/Paper';
import Meeting from './Meeting';

class MeetingsList extends Component {
  hasMore = true;

  render() {
    const {meetings, currentPage, pages, loadMore} = this.props;
    this.hasMore = currentPage < pages;
    const listItems = meetings.map(meeting =>
      <Meeting key={meeting._id} meeting={meeting}/>
    );

    if (_.isEmpty(meetings)) {
      return <div>Empty</div>;
    }

    return (
      <InfiniteScroll
        pageStart={1}
        loadMore={loadMore}
        hasMore={this.hasMore}
        loader={<div style={LoaderStyle} className="loader" key={0}>Loading ...</div>}
      >
        <Paper zDepth={1} style={ListItemsStyle}>
          {listItems}
        </Paper>
      </InfiniteScroll>
    );
  }
}

MeetingsList.propTypes = {
  meetings: PropTypes.array,
  currentPage: PropTypes.number,
  pages: PropTypes.number,
  loadMore: PropTypes.func
};

export default MeetingsList;
