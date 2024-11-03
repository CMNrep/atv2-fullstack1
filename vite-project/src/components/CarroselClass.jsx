import React, { Component } from "react";
import "./css/Carrossel.css";
import VideoLoader from "./VideoLoader";
import Modal from "./Modal";

class Carrossel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      images: [], // Armazena as URLs das imagens carregadas
      videosId: [
        "Iqt8tzH4c6Y",
        "KG770hOuT2k",
        "AEWvRqZQ0RU",
        "aXc9DVfLTGo",
        "ZgWgnSG9PB0",
      ],
      isOpen: false,
      isOpen2: false,
    };
  }

  async importarTodasImages() {
    const imageModules = import.meta.glob("../assets/img/*.{png,jpg,jpeg,svg}");
    const imagePromises = Object.values(imageModules).map((importFunc) =>
      importFunc().then((mod) => mod.default)
    );
    const images = await Promise.all(imagePromises);
    this.setState({ images });
  }

  componentDidMount() {
    this.importarTodasImages();
  }

  nextSlide = () => {
    this.setState((prevState) => ({
      currentSlide: (prevState.currentSlide + 1) % prevState.images.length,
    }));
  };

  prevSlide = () => {
    this.setState((prevState) => ({
      currentSlide:
        (prevState.currentSlide - 1 + prevState.images.length) %
        prevState.images.length,
    }));
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };
  openModal2 = () => {
    this.setState({ isOpen2: true });
  };

  closeModal2 = () => {
    this.setState({ isOpen2: false });
  };

  render() {
    const { currentSlide, images, videosId, isOpen } = this.state;
    let name = String(images[currentSlide]).split("/").pop().split(".")[0];

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="carousel-container">
          <button className="carousel-button left" onClick={this.prevSlide}>
            &#10094;
          </button>
          <div className="carousel">
            {images.length > 0 && (
              <img
                src={images[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="active"
              />
            )}
          </div>
          <button className="carousel-button right" onClick={this.nextSlide}>
            &#10095;
          </button>
        </div>
        <div className="link-container">
          <span className="filePath">{images[currentSlide]}</span>
        </div>
        <div className="link-container">
          <button className="link-trailer" onClick={this.openModal}>
            Trailer {name}
          </button>
          <Modal isOpen={isOpen} setOpenModal={this.closeModal}>
            <VideoLoader
              videoId={videosId[currentSlide]}
              height={720}
              width={1080}
            />
          </Modal>
        </div>
      </div>
    );
  }
}

export default Carrossel;