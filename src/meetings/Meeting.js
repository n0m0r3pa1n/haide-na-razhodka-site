import React, {Component} from "react";
import PropTypes from 'prop-types';
import moment from 'moment';
import FontIcon from 'material-ui/FontIcon';
import {Card, CardMedia, CardHeader, CardTitle, CardText, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Linkify from 'react-linkify';
import { withRouter } from 'react-router';

const style = {
  marginTop: '10px',
  marginLeft: '30px',
  marginRight: '30px',
  width: '30%',
};

class Meeting extends Component {

  openDetails(meetingId) {
    this.props.history.push(`/${meetingId}/details`);
  }

  render() {
    const meeting = this.props.meeting;

    const organizers = meeting.organizers.map(organizer => {
      const facebookIcon = <FontIcon style={{"fontSize": "18px"}} className="fa fa-facebook-square"/>;
      const facebookLink = <div style={{marginTop: "4px"}}>
        <a href={`https://www.facebook.com/${organizer.social_id}/events`} target="_blank">{facebookIcon}</a>
      </div>;
      return <CardHeader
        key={organizer._id}
        title={organizer.name}
        subtitle={facebookLink}
        avatar={organizer.profile_picture}
      />;
    });
    let index = 0;
    const description = meeting.description.trunc(200).split("\n").map(item => {
      return (
        <span key={index++}>
                {item}
          <br/>
        </span>
      );
    });
    return (
      <Card style={style}>
        {organizers}
        <CardMedia
          overlay={<CardTitle title={meeting.name} subtitle={moment(meeting.start_time).format("DD MMMM, YYYY")} />}>
          <img height="300px" src={meeting.cover} alt="" />
        </CardMedia>
        <CardText>
          <Linkify>
            {description}
          </Linkify>
        </CardText>
        <CardActions>
          <RaisedButton primary={true} onClick={() => this.openDetails(meeting._id)} label="Детайли" />
        </CardActions>
      </Card>
    );
  }
}

Meeting.propTypes = {
  meeting: PropTypes.object
};

export default withRouter(Meeting);
