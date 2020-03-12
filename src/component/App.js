// COMPONENTS
import React, { Component } from "react";
import axios from "axios";
import Layout from "./Layout/Layout";
import ImageGallery from "./ImageGallery/ImageGallery";

export default class App extends Component {
  state = {
    images: [],
    loading: false
  };

  componentDidMount() {
    axios
      .get(
        "https://pixabay.com/api/?q=sex&page=5&key=14763371-8ad954d112ffa98330dee37e7&image_type=photo&orientation=horizontal&per_page=12"
      )
      .then(response => this.setState({ images: response.data.hits }));
  }

  render() {
    return (
      <Layout>
        {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          <ImageGallery images={this.state.images}></ImageGallery>
        )}
      </Layout>
    );
  }
}
