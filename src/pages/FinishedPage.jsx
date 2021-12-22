import './TaskPage.css';
import { BackToHomeBtn } from '../components/BackToHomeBtn';

export const FinishedPage = ({ cmp, finishedTasks, finishedDate }) => {
	return (
		<div className="task-page-container">
			<h1 className="task-page-title">Finished Tasks</h1>
			<div className="task-page-content">
				<div className="task-page-tasks">{cmp(finishedTasks, finishedDate)}</div>
			</div>
			<BackToHomeBtn />
		</div>
	);
};
