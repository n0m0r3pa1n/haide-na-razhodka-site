import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import PropTypes from "prop-types";
import * as _ from 'lodash';

class Location extends Component {
  render() {
    const {place} = this.props;
    if (_.isEmpty(place)) {
      return <div/>;
    }

    const {name, location = {}} = place;
    const {city, coordinates} = location;

    const mapLink = coordinates ? (<span style={{fontSize: "12px", marginRight: "10px"}}>
          <a href={`http://maps.google.com?q=${coordinates[0]},${coordinates[1]}`} target="_blank">Покажи на картата</a>
      </span>) : "";

    return (
      <div>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          <div>
            <FontIcon
              style={{marginLeft: "10px"}}
              className="fa fa-map-o"
            />
            <span style={{marginLeft: "20px", fontSize: "18px"}}>{name} {city}</span>
          </div>
          {mapLink}
        </div>
        <hr/>
      </div>
    );
  }
}

Location.propTypes = {
  place: PropTypes.object
};

export default Location;
