import React, { Component } from "react";
import Layout from "./Layout/Layout";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Notification from "./Notification/Notification";
import SearchBar from "./Searchbar/Searchbar";
import Modal from "./Modal/Modal";
import Button from "./Button/Button";
import imagesApi from "../services/imagesApi";

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 1,
    showModal: null
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
    if (!this.state.loading) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      });
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    imagesApi
      .fetchImagesWithQuery(searchQuery, page)
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1
        }))
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchQuerySubmit = query => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  openModalImage = largeImage => {
    this.setState({ showModal: largeImage });
  };

  closeModalImage = () => {
    this.setState({ showModal: null });
  };

  render() {
    const { images, loading, error, showModal } = this.state;
    return (
      <Layout>
        <SearchBar onSubmit={this.handleSearchQuerySubmit} />
        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}

        {images.length > 0 && (
          <ImageGallery
            images={images}
            onOpen={this.openModalImage}
          ></ImageGallery>
        )}

        {loading && <Loader />}

        {showModal && (
          <Modal closeModal={this.closeModalImage}>
            <img src={showModal} alt="" />
          </Modal>
        )}

        {images.length > 0 && !loading && (
          <Button onClickButton={this.fetchImages} />
        )}
      </Layout>
    );
  }
}
