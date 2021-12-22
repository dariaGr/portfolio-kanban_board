import './UserMenu.css';
import React, { Component } from 'react';
import logo from '../../assets/avatar.png';
import arrow from '../../assets/arrow-down.svg';

export class UserMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ToggleFlag: false,
		};
	}

	handleToggle = () => {
		this.setState((prevState) => ({
			ToggleFlag: !prevState.ToggleFlag,
		}));
	};

	render() {
		const { ToggleFlag } = this.state;
		return (
			<div className="user-menu" onClick={this.handleToggle}>
				<img src={logo} alt="user avatar" />
				<img className={ToggleFlag && 'arrow-down'} src={arrow} alt="" />
				{ToggleFlag && (
					<div className="toggle-menu">
						<ul className="toggle-menu-list">
							<li className="toggle-menu-item">Profile</li>
							<li className="toggle-menu-item">Log Out</li>
						</ul>
					</div>
				)}
			</div>
		);
	}
}
