import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import PropTypes from "prop-types";
import moment from "moment";

class Location extends Component {
  render() {
    const {startTime, endTime, ticketUri} = this.props;
    let timeFormat = " HH:mm";
    const startTimeFormat = moment(startTime).format(timeFormat);
    const endTimeFormat = moment(endTime).format("HH:mm, DD MMM");

    const ticket = ticketUri ? <a href={ticketUri} target={"_blank"}>Повече информация</a> : "";
    return (
      <div>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          <div>
            <FontIcon
              style={{marginLeft: "10px"}}
              className="fa fa-clock-o"
            />
            <span style={{marginLeft: "20px", fontSize: "18px"}}>{startTimeFormat} - {endTimeFormat}</span>
          </div>
          <div style={{fontSize: "12px", marginRight: "10px"}}>{ticket}</div>
        </div>
        <hr/>
      </div>
    );
  }
}

Location.propTypes = {
  startTime: PropTypes.instanceOf(Date),
  endTime: PropTypes.instanceOf(Date),
  ticketUri: PropTypes.string
};

export default Location;
