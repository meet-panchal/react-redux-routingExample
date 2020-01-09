import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "./redux/actionConstants";

class DisplayList extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    if (this.state.posts.length === 0) {
      this.props.loadPosts();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.allPosts !== this.props.allPosts) {
      this.setState({
        ...this.state,
        posts: this.props.allPosts
      });
    }
  }
  render() {
    return (
      <div>
        <ol>
          {this.state.posts.map(post => (
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
