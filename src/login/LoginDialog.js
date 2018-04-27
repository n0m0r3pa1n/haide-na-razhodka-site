import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';

class LoginDialog extends Component {
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

  login() {
    window.FB.login(function(response) {
      console.log(response);
    }, {scope: 'email'});
  }

  render() {

    const open = this.props.open;
    const onRequestClose = this.props.onRequestClose;

    return (
      <Dialog
        title="Вход с Facebook"
        style={{height: "600px"}}
        modal={false}
        open={open}
        onRequestClose={onRequestClose}
      >
        <div id={'fb-root'} />
        <button onClick={() => this.login()}>Login with Facebook </button>
      </Dialog>
    );
  }
}

LoginDialog.propTypes = {
  open: PropTypes.bool,
  onRequestClose: PropTypes.func
};


export default LoginDialog;
