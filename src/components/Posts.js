import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  render() { 
    return (
			<div className="left">
				<Post
					src="https://syndlab.com/files/view/5db9b150252346nbDR1gKP3OYNuwBhXsHJerdToc5I0SMLfk7qlv951730.jpeg"
					alt="landscape"
				/>
				<Post
					src="https://images.barrons.com/im-117923?width=620&size=1.5005861664712778"
					alt="landscape"
				/>
			</div>
		);
  }
}
 
export default Posts;