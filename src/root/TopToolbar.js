import React, {Component} from 'react';
import PropTypes from "prop-types";
import muiThemeable from 'material-ui/styles/muiThemeable';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import LoginDialog from '../login/LoginDialog';

class TopToolbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  openLoginDialog() {
    this.setState({
      open: true
    });
  }

  closeLoginDialog() {
    this.setState({
      open: false
    });
  }

  render() {
    return (
      <div>
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
          <ToolbarGroup>
            <RaisedButton label="Вход" secondary={true} onClick={() => this.openLoginDialog()}/>
          </ToolbarGroup>
        </Toolbar>
        <LoginDialog open={this.state.open} onRequestClose={() => this.closeLoginDialog()} />
      </div>
    );
  }
}

TopToolbar.propTypes = {
  startTime: PropTypes.instanceOf(Date),
  endTime: PropTypes.instanceOf(Date),
  ticketUri: PropTypes.string
};

export default muiThemeable()(TopToolbar);
