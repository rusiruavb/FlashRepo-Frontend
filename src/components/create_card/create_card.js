import React, { Component } from 'react';
import { connect } from "react-redux";
import { createCard } from "../../actions/cardActions";
import DisplayCards from "../display_cards/display_cards";
import PropTypes from "prop-types";

class CreateCard extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      subName: "",
      lessonTopic: "",
      description: "",
      question: "",
      answer: "",
      status: ""
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  // this is test
  onSubmit(e) {
    e.preventDefault();
    const data = { 
      subName: this.state.subName,
      lessonTopic: this.state.lessonTopic,
      description: this.state.description,
      question: this.state.question,
      answer: this.state.answer,
      status: this.state.status
    }
    this.props.createCard(data);
  }
  // this is testing
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-7">
            <form onSubmit={this.onSubmit}>
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" placeholder="Subject name" name="subName" onChange={this.onChange} />
                <div className="form-text">enter the subject name</div>
              </div>
              <div className="mb-3">
                <label className="form-label">Topic</label>
                <input type="text" className="form-control" placeholder="Topic name" name="lessonTopic" onChange={this.onChange} />
                <div className="form-text">what is the topic that you learn</div>
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea className="form-control" rows="2" name="description" onChange={this.onChange} ></textarea>
                <div className="form-text">description of the topic. this is optional *</div>
              </div>
              <div className="mb-3">
                <label className="form-label">Question</label>
                <input type="text" className="form-control" placeholder="Enter question" name="question" onChange={this.onChange} />
                <div className="form-text">write your question here</div>
              </div>
              <div className="mb-3">
                <label className="form-label">Answer</label>
                <textarea className="form-control" rows="3" name="answer" onChange={this.onChange} ></textarea>
                <div className="form-text">what is the answer to that question</div>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="status" id="check1" value="know" onChange={this.onChange} />
                <label className="form-check-label" htmlFor="check1">
                  I know the answer
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="status" id="check2" value="don't know" onChange={this.onChange} />
                <label className="form-check-label" htmlFor="check2">
                  I don't know the answer
                </label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="col-5">
            <DisplayCards/>
          </div>
        </div>
      </div>
    )
  }
}

CreateCard.propTypes = {
  createCard: PropTypes.func.isRequired
}

export default connect(null, { createCard })(CreateCard);


