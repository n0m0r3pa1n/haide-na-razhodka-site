/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../meetings/HomePage';
import Details from '../details/Details';
import NotFoundPage from './NotFoundPage';
import TopToolbar from "./TopToolbar"

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <TopToolbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/:id/details" component={Details} />
            <Route path="/login" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
