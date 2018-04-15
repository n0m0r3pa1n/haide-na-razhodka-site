import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchMeeting} from "./actions";
import * as _ from "lodash";

class Details extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.loadMeeting(id);
  }

  render() {
    const {meeting} = this.props;
    if (_.isEmpty(meeting)) {
      return (<div>LOADING</div>);
    }

    return (
      <div>
        Details ${meeting.name}
      </div>
    );
  }
}


Details.propTypes = {
  meeting: PropTypes.object,
  loadMeeting: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

const mapStateToProps = (state) => {
  return {
    meeting: state.meeting.details
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadMeeting: (fromDate, toDate, page) => dispatch(fetchMeeting(fromDate, toDate, page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
