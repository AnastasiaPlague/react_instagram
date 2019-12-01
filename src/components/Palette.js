import React, { Component } from "react";
import InstaService from "../services/instaService";
import ErrorMessage from "./Error";

class Palette extends Component {
	InstaService = new InstaService();
	state = {
		error: false,
		photos: []
	};

	componentDidMount() {
		this.updateImages();
	}

	updateImages() {
		this.InstaService.getAllImages()
			.then(this.onImagesLoaded)
			.catch(this.onError);
	}

	onError = () => {
		this.setState({
			error: true
		});
	};

	onImagesLoaded = photos => {
		this.setState({
			error: false,
			photos
		});
  };
  
  renderItems(arr) {
    return arr.map(item => {
      const {src, alt} = item;
      return <img src={src} alt={alt}/>
    })
  }

	render() {
		const { error, photos } = this.state;
		if (error) {
			return <ErrorMessage />;
    }
    
    const items = this.renderItems(photos);
		return (
      <div className="palette">
        {items}
      </div>
    );
	}
}

export default Palette;
