import './Footer.css';

const Footer = ({ name, year, activeTasks, finishedTasks }) => {
	return (
		<div className="footer">
			<div className="tasks">
				<div className="active-tasks">Active tasks: {activeTasks}</div>
				<div className="finished-tasks">Finished tasks: {finishedTasks}</div>
			</div>
			<div className="kanban-author">
				Kanban board by {name}, {year}
			</div>
		</div>
	);
};

export default Footer;
