import React from "react";
import User from "./User";
import Palette from "./Palette";

const Profile = () => {
	return (
		<div className="container profile">
			<User src="https://i.ytimg.com/vi/jpsGLsaZKS0/maxresdefault.jpg" alt="userpic" name="cutie" />
			<Palette />
		</div>
	);
};

export default Profile;
