import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';

const customContentStyle = {
};

class LoginDialog extends Component {
  render() {

    const open = this.props.open;
    const onRequestClose = this.props.onRequestClose;

    return (
      <Dialog
        title="Вход с Facebook"
        modal={false}
        contentStyle={customContentStyle}
        open={open}
        onRequestClose={onRequestClose}
      >
        This dialog spans the entire width of the screen.
      </Dialog>
    );
  }
}

LoginDialog.propTypes = {
  open: PropTypes.bool,
  onRequestClose: PropTypes.func
};


export default LoginDialog;
