import React, { Component } from "react";

class Post extends Component {
	render() {
		return (
			<div className="post">
				<img src={this.props.src} alt={this.props.alt} />
				<div className="post__name">account</div>
				<div className="post__descr">text text text</div>
			</div>
		);
	}
}

export default Post;
