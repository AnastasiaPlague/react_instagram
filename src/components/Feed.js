import React from 'react';
import Posts from './Posts.js';
import Users from './Users.js';

function Feed() {
	return (
		<div className="container feed">
			<Posts />
			<Users />
		</div>

	)
};

 
export default Feed;