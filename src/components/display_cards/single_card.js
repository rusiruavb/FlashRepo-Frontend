import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCards } from "../../actions/cardActions";

class Card extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div class="card" style={{width: "18rem"}}>
          <div class="card-body">
            <h5 class="card-title">{this.props.subjectName}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { fetchCards })(Card);
