import React from "react";
import {connect} from "react-redux";

import { User } from "../components/User";
import { Main } from "../components/Main";
import { setName, setAge} from "../actions/userActions";

class App extends React.Component {
  setUser(newName,newAge) {
    this.props.setName(newName);
    this.props.setAge(newAge);
  }
  render() {
    return(
      <div className="container">
          <Main username={this.props.user.username} changeUserName={(newName) => this.props.setName(newName)}
                age={this.props.user.age} changeUserAge={(newAge) => this.props.setAge(newAge)}
                changeUser={this.setUser.bind(this)}/>
          <User username={this.props.user.username} age={this.props.user.age}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math
  };
};

const mapDispacthToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    },
    setAge: (age) => {
      dispatch(setAge(age));
    }
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(App);
