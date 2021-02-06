import React, { Component } from 'react'
import { connect } from "react-redux";
import { getUserData } from "../../actions/userActoins";
import PropTypes from "prop-types";
import DisplayCards from "../display_cards/display_cards";

class UserProfile extends Component {

  componentWillMount() {
    this.props.getUserData();
  }

  render() {
    return (
      <div>
        <h1>{this.props.userData.email}</h1>
        <p>
          {this.props.userData.name}<br/>
          {this.props.userData.school}<br/>
          {this.props.userData.field}
        </p>
        <img src={this.props.userData.profilePicture} width="50" />
      </div>
    )
  }
}

UserProfile.propTypes = {
  getUserData: PropTypes.func.isRequired,
  userData: PropTypes.object
}

const mapStateToProps = state => ({
  userData: state.user.userData
})

export default connect(mapStateToProps, { getUserData })(UserProfile);
