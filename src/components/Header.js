import React, { Component } from "react";
import logo from "../logo.svg";

class Header extends Component {
	state = {};
	render() {
		return (
			<header>
				<div className="container h-flex">
					<a href="#" className="logo">
						<img src={logo} alt="logo"></img>
					</a>
					<nav className="links">
						<ul>
							<li>
								<a href="" className="menu__links">
									Feed
								</a>
							</li>
							<li>
								<a href="" className="menu__links">
									Profile
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		);
	}
}

export default Header;
