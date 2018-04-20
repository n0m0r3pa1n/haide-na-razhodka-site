import React, {Component} from 'react';
import PropTypes from "prop-types";
import muiThemeable from 'material-ui/styles/muiThemeable';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import {Link} from 'react-router-dom';

class TopToolbar extends Component {
  render() {
    return (
      <Toolbar style={{
        backgroundColor: `${this.props.muiTheme.palette.primary1Color}`,
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px",
        borderRadius: "0px"
      }}>
        <ToolbarGroup firstChild={true}>
          <Link to={"/"}
                style={{color: "rgb(255, 255, 255)", fontSize: "24px", marginLeft: "60px", textDecoration: "none"}}>
            Хайде на разходка
          </Link>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

TopToolbar.propTypes = {
  startTime: PropTypes.instanceOf(Date),
  endTime: PropTypes.instanceOf(Date),
  ticketUri: PropTypes.string
};

export default muiThemeable()(TopToolbar);
