import React from "react";
import { connect } from "react-redux";
import { createUser } from "../../actions/userActoins"

class Createuser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      school: "",
      field: "",
      profilePicture: "https://firebasestorage.googleapis.com/v0/b/portfolio-2b348.appspot.com/o/Profile-PNG-Icon.png?alt=media&token=bde6dfcb-17a3-4586-a6bd-17421e8ee0cc"
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
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      school: this.state.school,
      field: this.state.field,
      profilePicture: this.state.profilePicture
    }
    console.log(userData);
    this.props.createUser(userData);
  }
  
  render() {
    return (
      <div>
        <div className="container mt-5">
          <form onSubmit={this.onSubmit}>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" placeholder="please enter your name" 
                onChange={this.onChange}
                name="name"/>
              <label>Name</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" placeholder="someone@email.com" 
                onChange={this.onChange}
                name="email"/>
              <label>Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" placeholder="Password" 
                onChange={this.onChange}
                name="password"/>
              <label>Password</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" placeholder="tell us what is your educational center" 
                onChange={this.onChange}
                name="school"/>
              <label>School/ University</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" placeholder="enter field that your are studing" 
                onChange={this.onChange}
                name="field"/>
              <label>Field</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null, {createUser})(Createuser);