import React, { Component } from 'react'
import { connect } from "react-redux";
import { loginUser } from "../../actions/userActoins";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this); 
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    }
    console.log(userData);
    this.props.loginUser(userData);
  }

  render() {
    return (
      <div className="container pt-5">
        <form onSubmit={this.onSubmit}>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" placeholder="please enter email" 
              onChange={this.onChange}
              name="email"/>
            <label>Email Address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" placeholder="enter your password here" 
              onChange={this.onChange}
              name="password"/>
            <label>Password</label>
          </div>
          <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, {loginUser})(Login)
