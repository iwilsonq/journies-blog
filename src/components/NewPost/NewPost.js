import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import ArticleHeader from '../Article/ArticleHeader';

const ax = axios.create({
  baseURL: 'http://localhost:3090'
});

export default class NewPost extends Component {
  state = {
    coverPhotoExists: false
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
    params.append('content', JSON.stringify(this.refs.textarea.value.split('\n')));
    params.append('caption', this.refs.caption.value);
    params.append('image', this.refs.coverImage.files[0]);

    ax.post('/articles', params)
      .then(results => {
        console.log(results.data);
        browserHistory.push('/');
      })
      .catch(err => console.warn(err));

  }

  render() {
    return (
      <div className="new-post article">
        <div className="content">
          <ArticleHeader />
        </div>

        <div className="content">
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

        <div className="cover-photo">
          <img id="cover-image" src="" />
          <p className="caption"></p>
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
