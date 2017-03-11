import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import ArticleHeader from '../Article/ArticleHeader';
import { Error } from '../common';

const ax = axios.create({
  baseURL: (process.env.NODE_ENV === 'production' ?
    'https://journies.herokuapp.com' :
    'http://localhost:3090'
  )
});

export default class NewPost extends Component {
  state = {
    coverPhotoExists: false,
    errorMessage: ''
  };

  handleCoverPhoto() {
    const imageFile = this.refs.coverImage.files[0];
    const img = document.querySelector('#cover-image');
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      img.src = reader.result;
    }, false);

    if (imageFile) {
      reader.readAsDataURL(imageFile);
      this.setState({ coverPhotoExists: true })
    }
  }

  handleSubmit() {
    const params = new FormData();
    params.append('title', this.refs.title.value);
    params.append('subtitle', this.refs.subtitle.value);
    params.append('content', JSON.stringify(this.refs.textarea.value.split('\n\n')));
    params.append('caption', this.refs.caption.value);
    params.append('image', this.refs.coverImage.files[0]);
    params.append('category', this.refs.category.value);

    if (!this.refs.title.value) {
      this.setState({
        errorMessage: 'Cannot post article without title'
      });
      return;
    }

    ax.post('/articles', params)
      .then(results => {
        console.log(results);
        browserHistory.push('/');
      })
      .catch(err => {
        this.setState({ errorMessage: err.response.statusText });
      });
  }

  render() {
    return (
      <div className="new-post article">

        <div className="content">

          <div className="cover-photo">
            <img id="cover-image" src="" />
            <p className="caption"></p>
          </div>

          <label htmlFor="coverImage">
            Cover Image:
            <br/>
            <input
              type="file"
              ref="coverImage"
              onChange={this.handleCoverPhoto.bind(this)}
              />
          </label>
          <br />
          <label htmlFor="caption">
            Caption:
            <br/>
            <input
              type="text"
              ref="caption"
              />
          </label>
        </div>

        <div className="content">
          <label htmlFor="title">
            Title:
            <br />
            <input
              type="text"
              ref="title"
              />
          </label>
          <label htmlFor="subtitle">
            Subtitle:
            <br />
            <input
              type="text"
              ref="subtitle"
              />
          </label>
          <br />
          <label htmlFor="category">
            Category: (tutorials, stack, entrepreneur)
            <br />
            <input
              type="text"
              ref="category"
              />
          </label>
          <br />
          <label htmlFor="content">
            Body:
          </label>
          <textarea
            ref="textarea"
            name="article-body-input"
            id="article-body-input"
            cols="20"
            rows="20"
            ></textarea>

          {this.state.errorMessage !== '' ?
            <Error message={this.state.errorMessage} /> :
            null
          }

        <button
          type="button"
          onClick={this.handleSubmit.bind(this)}
        >
          Submit
        </button>
        </div>
      </div>
    );
  }
}
