import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "./redux/actionConstants";

class DisplayList extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    return (
      <div>
        <ol>
          {this.props.allPosts.map(post => (
            <div key={post.id}>
              <li>{post.title}</li>
              <Link to={`/edit/${post.id}`} className="btn btn-success">
                Click ME!
              </Link>
            </div>
          ))}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allPosts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadPosts: _ => dispatch(actionTypes.loadPost())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayList);
