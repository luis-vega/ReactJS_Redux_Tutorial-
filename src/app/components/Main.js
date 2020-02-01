import React from "react";

export class Main extends React.Component {
  render(){
    return(
      <div>
        <div className="row">
          <div className="col-xs-12">
            <h1>The Main Page</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <input type="text" defaultValue={this.props.username} ref='nameInput'/>
            <button className="btn btn-primary"
                    onClick={() => this.props.changeUserName(this.refs.nameInput.value)}>Change the username</button>
            <hr/>
            <input type="integer" defaultValue={this.props.age} ref='ageInput'/>
            <button className="btn btn-primary"
                    onClick={() => this.props.changeUserAge(this.refs.ageInput.value)}>Change the user age</button>
            <hr/>
            <button className="btn btn-primary"
                    onClick={() => this.props.changeUser(this.refs.nameInput.value, this.refs.ageInput.value)}>Change user</button>
          </div>
        </div>
      </div>
    );
  }
}
