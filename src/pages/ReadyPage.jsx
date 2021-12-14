import './TaskPage.css';
import { Link } from 'react-router-dom';

const ReadyPage = () => {
	return (
		<div className="task-page-container">
			<h1 className="task-page-title">Ready Tasks</h1>
			<div className="task-page-exit">
				<Link to="/">
					<span></span>
					<span></span>
				</Link>
			</div>
		</div>
	);
};

export default ReadyPage;
