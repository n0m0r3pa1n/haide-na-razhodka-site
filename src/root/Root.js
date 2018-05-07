import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import {MuiThemeProvider} from 'material-ui';
import App from './App';

export default class Root extends Component {
  render() {
    const {store, history} = this.props;
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
