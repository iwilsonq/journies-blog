import React, { Component } from 'react';
import axios from 'axios';
import Comment from './Comment';

const ax = axios.create({
  baseURL: (process.env.NODE_ENV === 'production' ?
    'https://journies.herokuapp.com' :
    'http://localhost:3090'
  )
});

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments() {
    ax.get(`/articles/${this.props.currentArticle._id}/comments`)
      .then(response => response.data.reverse())
      .then(comments => this.setState({ comments }));
  }

  handleSubmitComment(e) {
    console.log(this.refs.comment.value);
    if (e.keyCode === 13 && this.refs.comment.value !== '') {
      ax.post(`/articles/${this.props.currentArticle._id}/comments`, {
        content: this.refs.comment.value
      })
      .then(response => {
        console.log(response);
        this.fetchComments();
        this.refs.comment.value = '';
      })
      .catch(err => console.error(err));
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="comment-section">
        <h2>Comments</h2>

        <input
          name="comment"
          type="text"
          ref="comment"
          placeholder="What do you think?"
          onKeyDown={this.handleSubmitComment.bind(this)}
        />

        <div className="comments">
          {this.state.comments.map(comment => <Comment key={comment._id} {...comment} />)}
        </div>
      </div>
    );
  }
}

export default CommentSection;
