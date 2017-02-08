import React, { Component } from 'react';
import ArticleHeader from '../Article/ArticleHeader';

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
    this.setState({ body: this.refs.textarea.value });
  }

  render() {
    console.log(this.state);
    return (
      <div className="new-post article">
        <div className="content">
          <ArticleHeader />
        </div>

        {
          this.state.coverPhotoExists ? null :
          <input
            type="file"
            ref="coverImage"
            onChange={this.handleCoverPhoto.bind(this)}
          />
        }

        <div className="cover-photo">
          <img id="cover-image" src="" />
          <p className="caption"></p>
        </div>

        <div className="content">
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
