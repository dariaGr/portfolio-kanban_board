import './TaskPage.css';
import { Link } from 'react-router-dom';

const FinishedPage = () => {
	return (
		<div className="task-page-container">
			<h1 className="task-page-title">Finished Tasks</h1>
			<div className="task-page-exit">
				<Link to="/">
					<span></span>
					<span></span>
				</Link>
			</div>
		</div>
	);
};

export default FinishedPage;
