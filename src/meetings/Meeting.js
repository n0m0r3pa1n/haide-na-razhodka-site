import React, {Component} from "react";
import PropTypes from 'prop-types';
import moment from 'moment';
import FontIcon from 'material-ui/FontIcon';
import {Card, CardMedia, CardHeader, CardTitle, CardText, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Linkify from 'react-linkify';
import { Link } from 'react-router-dom'

const style = {
  marginTop: '10px',
  marginLeft: '30px',
  marginRight: '30px',
  width: '30%',
};

const linkStyle = {
  fontSize: '14px',
  letterSpacing: '0px',
  textTransform: 'uppercase',
  textDecoration: 'none',
  userSelect: 'none',
  color: 'rgb(255, 255, 255)'
};

class Meeting extends Component {

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
          <RaisedButton primary={true}>
            <Link to={`/${meeting._id}/details`} style={linkStyle}>Детайли</Link>
          </RaisedButton>
        </CardActions>
      </Card>
    );
  }
}

Meeting.propTypes = {
  meeting: PropTypes.object
};

export default Meeting;
