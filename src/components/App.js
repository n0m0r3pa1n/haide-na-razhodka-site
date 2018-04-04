/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../meetings/HomePage';
import NotFoundPage from './NotFoundPage';
import BottomNavigation from '../navigation/BottomNavigation';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
          <BottomNavigation />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
