import './Header.css';
import UserMenu from '../UserMenu/UserMenu';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<Link className="header-link" to="/">
			<div className="header">
				<Link className="logo" to="/">
					Kanban Board
				</Link>
				<UserMenu />
			</div>
		</Link>
	);
};

export default Header;
