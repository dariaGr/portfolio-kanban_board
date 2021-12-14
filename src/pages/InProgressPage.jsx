import './TaskPage.css';
import { Link } from 'react-router-dom';

const InProgressPage = () => {
	return (
		<div className="task-page-container">
			<h1 className="task-page-title">In Progress Tasks</h1>
			<div className="task-page-exit">
				<Link to="/">
					<span></span>
					<span></span>
				</Link>
			</div>
		</div>
	);
};

export default InProgressPage;
