import React, {Component} from 'react';
import {connect} from 'react-redux';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import {setSelectedNavigationItem} from "./actions";

const meetingsIcon = <FontIcon className="fa fa-map-o" />;

class AppBottomNavigation extends Component {
  select = (index) => this.props.selectNavigationItem(index);

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.props.index}>
          <BottomNavigationItem
            label="Срещи"
            icon={meetingsIcon}
            onClick={() => this.select(0)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    index: state.navigation.index
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectNavigationItem: (index) => dispatch(setSelectedNavigationItem(index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBottomNavigation);

