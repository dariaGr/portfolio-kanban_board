import './TaskPage.css';
import { BackToHomeBtn } from '../components/BackToHomeBtn';

export const BacklogPage = ({ cmp, backlogTasks, backlogDate }) => {
	return (
		<div className="task-page-container">
			<h1 className="task-page-title">Backlog Tasks</h1>
			<div className="task-page-content">
				<div className="task-page-tasks">{cmp(backlogTasks, backlogDate)}</div>
			</div>
			<BackToHomeBtn />
		</div>
	);
};
