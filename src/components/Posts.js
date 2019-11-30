import React, { Component } from "react";
import InstaService from "../services/instaService";
import User from "./User";
import ErrorMessage from "./Error";

class Posts extends Component {
	InstaService = new InstaService(); // calls new class to "save" methods to the new object
	state = {
		posts: [],
		error: false
	};

	componentDidMount() {
		this.updatePosts();
	}

	updatePosts() {
		this.InstaService.getAllPosts()
			.then(this.onPostsLoaded) //this function will automatically receive data from the JSON and pass it to the method onLoaded
			.catch(this.onError);
	}

	onPostsLoaded = posts => {
		this.setState({
			posts,
			error: false
		});
	};

	onError = () => {
		this.setState({
			error: true
		});
	};

	renderItems(arr) {
		return arr.map(item => {
			const { name, altname, photo, src, alt, descr, id } = item;
			return (
				<div className="post">
					<User src={photo} alt={altname} name={name} key={id} min />
					<img src={src} alt={alt} />
					<div className="post__name">{name}</div>
					<div className="post__descr">{descr}</div>
				</div>
			);
		});
	}

	render() {
		const { error, posts } = this.state;
		if (error) {
			return <ErrorMessage />;
		}
		const items = this.renderItems(posts);
		return <div className="left">{items}</div>;
	}
}

export default Posts;
