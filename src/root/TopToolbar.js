import React, {Component} from 'react';
import PropTypes from "prop-types";
import muiThemeable from 'material-ui/styles/muiThemeable';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import LoginDialog from '../login/LoginDialog';
import {login} from "../login/actions";
import {connect} from "react-redux";
import {resetToken} from "../security/actions";

class TopToolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.loginDialogRef = React.createRef();
  }

  componentWillUpdate(nextProps) {
    if (nextProps.isAuthenticated !== this.props.isAuthenticated) {
      if (nextProps.isAuthenticated) {
        this.loginDialogRef.current.closeDialog();
      }
    }
  }

  openLoginDialog() {
    this.loginDialogRef.current.openDialog();
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
            <RaisedButton style={this.props.isAuthenticated ? {display: "none"} : {display: "block"}} label="Вход" secondary={true} onClick={() => this.openLoginDialog()}/>
            <RaisedButton style={this.props.isAuthenticated ? {display: "block"} : {display: "none"}} label="Изход" primary={true} onClick={() => this.props.resetToken()}/>
          </ToolbarGroup>
        </Toolbar>
        <LoginDialog ref={this.loginDialogRef} login={this.props.login} />
      </div>
    );
  }
}

TopToolbar.propTypes = {
  startTime: PropTypes.instanceOf(Date),
  endTime: PropTypes.instanceOf(Date),
  isAuthenticated: PropTypes.bool,
  login: PropTypes.func,
  resetToken: PropTypes.func,
  ticketUri: PropTypes.string
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (authData) => dispatch(login(authData)),
    resetToken: () =>{
      localStorage.removeItem('jwtToken'); //remove token from storage
      dispatch(resetToken());
    }
  };
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
  };
};

const ThemedToolbar = muiThemeable()(TopToolbar);
export default connect(mapStateToProps, mapDispatchToProps)(ThemedToolbar);
