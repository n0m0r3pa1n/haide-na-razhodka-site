import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from '../meetings/HomePage';
import Details from '../details/Details';
import NotFoundPage from './NotFoundPage';
import TopToolbar from "./TopToolbar";
import PropTypes from "prop-types";

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <TopToolbar/>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/:id/details" component={Details}/>
            <Route path="/login" component={HomePage}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  resetToken: PropTypes.func
};
