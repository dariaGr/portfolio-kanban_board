import './TaskPage.css';
import { BackToHomeBtn } from '../components/BackToHomeBtn';

export const ReadyPage = ({ cmp, readyTasks, readyDate }) => {
	return (
		<div className="task-page-container">
			<h1 className="task-page-title">Ready Tasks</h1>
			<div className="task-page-content">
				<div className="task-page-tasks">{cmp(readyTasks, readyDate)}</div>
			</div>
			<BackToHomeBtn />
		</div>
	);
};
