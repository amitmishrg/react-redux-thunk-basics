import React from "react";
import { connect } from 'react-redux';

import {setName, setAge} from '../../actions/userActions';
import {addNumber, subtractNumber} from '../../actions/mathActions';
import {Main} from "../../components/Main";
import {User} from "../../components/User";

// Smart component are those component they know about all actions and states
class App extends React.Component {
  constructor() {
    super();
  }

  changeUserName(newName) {
    this.props.setName(newName);
    this.props.setAge(35);
    this.props.addNumber(20);
    this.props.subtractNumber(30);
  }

  render() {
    return (
      <div className="container">
        <Main changeUserName={this.changeUserName.bind(this)}/>
        <User username={this.props.user.name} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => dispatch(setName(name)),
    setAge: (age) => dispatch(setAge(age)),
    addNumber: (number) => dispatch(addNumber(number)),
    subtractNumber: (number) => dispatch(subtractNumber(number))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
