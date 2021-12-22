import './TaskPage.css';
import { BackToHomeBtn } from '../components/BackToHomeBtn';

export const InProgressPage = ({ cmp, inProgressTasks, inProgressDate }) => {
	return (
		<div className="task-page-container">
			<h1 className="task-page-title">In Progress Tasks</h1>
			<div className="task-page-content">
				<div className="task-page-tasks">{cmp(inProgressTasks, inProgressDate)}</div>
			</div>
			<BackToHomeBtn />
		</div>
	);
};
