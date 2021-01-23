import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCards } from "../../actions/cardActions";
import PropTypes from "prop-types";
import Card from "./single_card";

class DisplayCards extends Component {
  componentWillMount() {
    this.props.fetchCards();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.newCard) {
      this.props.card.unshift(newProps.newCard.data)
      // console.log(newProps)
    }
    console.log(newProps.newCard.data)
  }

  render() {
    return (
      <div>
 
        {this.props.card.map((data) => (
          <Card 
            subjectName={data.subjectName}
          />
        ))}
      </div>
    )
  }
}

DisplayCards.propTypes = {
  fetchCards: PropTypes.func.isRequired,
  card: PropTypes.array.isRequired,
  newCard: PropTypes.object
}

const mapStateToProps =  state => ({
  card: state.card.cards,
  newCard: state.card.card
})

export default connect(mapStateToProps, { fetchCards })(DisplayCards);
