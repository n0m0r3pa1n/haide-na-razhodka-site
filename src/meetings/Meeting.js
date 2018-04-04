import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Linkify from 'react-linkify';

class Meeting extends Component {

  render() {
    const meeting = this.props.meeting;
    const organizers = meeting.organizers.map(organizer =>
      <CardHeader
        title={organizer.name}
        subtitle="Subtitle"
        avatar={organizer.profilePicture}
      />
    );
    const description = meeting.description.split("\n").map(item => {
      return (
        <span>
                {item}
          <br/>
        </span>
      )
    });
    return (
      <Card>
        {organizers}
        <CardTitle title={meeting.name} subtitle="Card subtitle"/>
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
