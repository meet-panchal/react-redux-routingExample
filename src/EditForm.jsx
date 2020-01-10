import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "./redux/actionConstants";
import "./component.common.css";

class EditForm extends Component {
  state = {
    currentPost: {},
    isLoading: true
  };

  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentPost !== this.props.currentPost) {
      this.setState({
        ...this.state,
        currentPost: this.props.currentPost,
        isLoading: false
      });
    }
  }

  changeHandler = event => {
    this.setState({
      ...this.state,
      currentPost: { ...this.state.currentPost, title: event.target.value }
    });
  };

  submitHandler = async (updatedObject, state) => {
    console.log("Inside Submit Handler : ", updatedObject);
    await this.props.updatePost(updatedObject, state);
    await this.props.history.push("/");
    // await this.props.history.goBack();
  };

  render() {
    return this.state.isLoading ? (
      <div
        className="spinner-border text-warning"
        role="status"
        style={{ margin: " 75px 0px 0px 120px" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    ) : (
      <div className="p-3">
        <textarea
          cols="30"
          rows="5"
          value={this.state.currentPost.title}
          onChange={this.changeHandler}
        />
        <br />
        <button
          className="btn btn-primary"
          onClick={() =>
            this.submitHandler(this.state.currentPost, this.props.allPosts)
          }
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
    isLoading: state.isLoading,
    allPosts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPost: id => dispatch(actionTypes.getPost(id)),
    updatePost: (newObject, oldState) =>
      dispatch({
        type: actionTypes.UPDATE_POST,
        updatedObject: newObject,
        oldState: oldState
      })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditForm));
