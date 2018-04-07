import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import IconButton from 'material-ui/IconButton';
import muiThemeable from 'material-ui/styles/muiThemeable';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fromDate: '', toDate: ''};

    this.handleFromDateChange = this.handleFromDateChange.bind(this);
    this.handleToDateChange = this.handleToDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFromDateChange(event, date) {
    this.setState({fromDate: date});
  }

  handleToDateChange(event, date) {
    this.setState({toDate: date});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.fromDate, this.state.toDate);
  }

  render() {
    return (
      <div align="center">
        <form onSubmit={this.handleSubmit}>
          <div style={{display: 'inline-block'}}>
            <DatePicker
              floatingLabelText="От дата"
              onChange={this.handleFromDateChange}
            />
          </div>
          <div style={{display: 'inline-block', marginLeft: '20px'}}>
            <DatePicker
              floatingLabelText="До дата"
              onChange={this.handleToDateChange}
            />
          </div>
          <IconButton type={'submit'} iconClassName="fa fa-search" iconStyle={{"color": `${this.props.muiTheme.palette.primary1Color}`}} />
        </form>
      </div>
    );
  }
}

export default muiThemeable()(SearchForm);
