import './BackToHomeBtn.css';
import { Link } from 'react-router-dom';

export const BackToHomeBtn = () => {
	return (
		<div className="page-exit">
			<Link to="/">
				<span></span>
				<span></span>
			</Link>
		</div>
	);
};
