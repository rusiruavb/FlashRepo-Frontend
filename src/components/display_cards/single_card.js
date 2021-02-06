import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCards, deleteCard } from "../../actions/cardActions";

class Card extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="card mb-3" style={{width: "100%"}}>
          <div className="card-body">
            <h5 className="card-title">{this.props.subjectName}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Lesson Name: {this.props.lessonName}</h6>
            <p className="card-text">{this.props.description}</p>
            <p className="card-text">{this.props.question}</p>
            <p className="card-text">{this.props.answer}</p>
            <a href="#" className="card-link">Update</a>
            <a href="#" className="card-link" onClick={this.props.deleteCard(this.props.cardID)}>Delete</a>
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  deleteCard: PropTypes.func.isRequired
}

export default connect(null, { deleteCard })(Card);
