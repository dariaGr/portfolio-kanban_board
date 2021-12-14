import React from 'react';
import logo from '../../assets/avatar.png';
import arrow from '../../assets/arrow-down.svg';
import './UserMenu.css';

class UserMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ToggleFlag: false,
		};

		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle() {
		this.setState((prevState) => ({
			ToggleFlag: !prevState.ToggleFlag,
		}));
	}

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

export default UserMenu;
