import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchMeeting} from "./actions";
import Paper from 'material-ui/Paper';
import Linkify from 'react-linkify';
import moment from 'moment';
import * as _ from "lodash";
import Location from './Location';
import Time from './Time';

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

    let index = 0;
    const description = meeting.description.split("\n").map(item => {
      return (
        <span key={index++}>
                {item}
          <br/>
        </span>
      );
    });
    let startTime = moment(meeting.start_time);
    let organizer = meeting.organizers[0];
    const place = meeting.place;
    return (
      <div className={"container"}>
        <Paper style={{marginTop: "10px"}}>
          <div className="card">
            <div style={{backgroundColor: "rgba(0, 0, 0, 0.89)"}}>
              <img className="card-img-top col-md-6 offset-md-3" src={meeting.cover}/>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-2 text-center">
                  <span style={{fontSize: "18px", display: "block"}}>{startTime.format("DD")}</span>
                  <span style={{color: "red", fontSize: "20px", display: "block"}}>{startTime.format("MMMM")}</span>
                  <span style={{fontSize: "10px", display: "block"}}>{startTime.format("YYYY")}</span>
                </div>
                <div className="col-md-9 offset-1">
                  <h3 className="card-title ">{meeting.name}</h3>
                  <div>Организирано от: <a href={`https://facebook.com/${meeting.social_id}`}
                                           target={"_blank"}>{organizer.name}</a>
                  </div>
                </div>
              </div>
              <hr/>
              <Location place={place} />
              <Time startTime={meeting.start_time} endTime={meeting.end_time} ticketUri={meeting.ticket_uri} />
              <div className="card-text">
                <h4 style={{marginBottom: "30px"}} className="text-center">Описание:</h4>
                <Linkify>
                  {description}
                </Linkify>
              </div>
            </div>
          </div>
        </Paper>
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
