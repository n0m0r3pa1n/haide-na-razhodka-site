/* eslint-disable import/no-named-as-default */
import {connect} from 'react-redux';
import {validateToken} from "../security/actions";
import App from './App';
import React, {Component} from "react";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

const mapDispatchToProps = (dispatch) => {
  return {
    loadUserFromToken: (token) => {
      if(!token || token === '') {
        return;
      }

      dispatch(validateToken(token))
    }
  };
};

const mapStateToProps = (state) => {
  return {
    token: state.user.token
  };
};

class AppContainer extends Component {
  componentWillMount() {
    let token = localStorage.getItem('jwtToken');
    if (token) {
      this.props.loadUserFromToken(token);
    }
  }

  render() {
    if (this.props.token) {
      localStorage.setItem('jwtToken', `${this.props.token}`);
    }

    return (
       <App />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
