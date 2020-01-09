import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "./redux/actionConstants";

class EditForm extends Component {
  state = {
    currentPost: {}
  };

  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentPost !== this.props.currentPost) {
      this.setState({
        ...this.state,
        currentPost: this.props.currentPost
      });
    }
  }

  changeHandler = event => {
    this.setState({
      ...this.state,
      currentPost: { ...this.state.currentPost, title: event.target.value }
    });
  };

  submitHandler = async updatedObject => {
    await this.props.updatePost(updatedObject);
    await this.props.history.push("/");
  };

  render() {
    return this.props.isLoading ? (
      <div
        className="spinner-border text-warning"
        role="status"
        style={{ margin: " 75px 0px 0px 120px" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    ) : (
      <div>
        <textarea
          cols="30"
          rows="5"
          value={this.state.currentPost.title}
          onChange={this.changeHandler}
        />
        <br />
        <button
          className="btn btn-primary"
          onClick={() => this.submitHandler(this.state.currentPost)}
        >
          Submit
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentPost: state.currentPost,
    isLoading: state.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPost: id => dispatch(actionTypes.getPost(id)),
    updatePost: newObject =>
      dispatch({ type: actionTypes.UPDATE_POST, updatedObject: newObject })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditForm));
