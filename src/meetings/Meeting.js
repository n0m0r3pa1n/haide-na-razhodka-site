import React, {Component} from "react";
import PropTypes from 'prop-types';
import moment from 'moment';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Linkify from 'react-linkify';

const style = {
  marginTop: '10px',
  marginLeft: '30px',
  marginRight: '30px'
};

class Meeting extends Component {

  render() {
    const meeting = this.props.meeting;
    const organizers = meeting.organizers.map(organizer =>
      <CardHeader
        key={organizer._id}
        title={organizer.name}
        subtitle="Subtitle"
        avatar={organizer.profilePicture}
      />
    );
    let index = 0;
    const description = meeting.description.split("\n").map(item => {
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
        <CardTitle title={meeting.name} subtitle={moment(meeting.start_time).format("DD MMMM, YYYY")}/>
        <CardText>
          <Linkify>
            {description}
          </Linkify>
        </CardText>
      </Card>
    );
  }
}

Meeting.propTypes = {
  meeting: PropTypes.object
};

export default Meeting;
