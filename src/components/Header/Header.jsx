import './Header.css';
import { Link } from 'react-router-dom';
import { UserMenu } from '../UserMenu';

export const Header = () => {
	return (
		<Link className="header-link" to="/">
			<header className="header">
				<div className="container">
					<div className="header-body">
						<Link className="logo" to="/">
							Kanban Board
						</Link>
						<UserMenu />
					</div>
				</div>
			</header>
		</Link>
	);
};
