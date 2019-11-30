import React, { Component } from "react";
import User from "./User";

class Post extends Component {
	render() {
		return (
			<div className="post">
				<User
					src="https://i.ytimg.com/vi/jpsGLsaZKS0/maxresdefault.jpg"
					alt="userpic"
					name="cutie"
					min
				/>
				<img src={this.props.src} alt={this.props.alt} />
				<div className="post__name">account</div>
				<div className="post__descr">text text text</div>
			</div>
		);
	}
}

export default Post;
