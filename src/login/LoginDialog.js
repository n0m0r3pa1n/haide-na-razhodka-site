import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';

class LoginDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentDidMount() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId            : '328009247324005',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v2.12'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12&appId=874212442599315&autoLogAppEvents=1';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  openDialog() {
    this.setState({
      open: true
    });
  }

  closeDialog() {
    this.setState({
      open: false
    });
  }

  login() {
    const {login} = this.props;
    window.FB.login(function(response) {
      login(response);
    }, {scope: 'email'});
  }

  render() {
    return (
      <Dialog
        title="Вход с Facebook"
        style={{height: "600px"}}
        modal={false}
        open={this.state.open}
        onRequestClose={() => this.closeDialog()}
      >
        <div id={'fb-root'} />
        <button onClick={() => this.login()}>Login with Facebook </button>
      </Dialog>
    );
  }
}

LoginDialog.propTypes = {
  open: PropTypes.bool,
  login: PropTypes.func
};

export default LoginDialog;
