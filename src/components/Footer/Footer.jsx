import './Footer.css';

export const Footer = ({ name, year, activeTasks, finishedTasks }) => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-body">
					<div className="tasks">
						<div className="active-tasks">Active tasks: {activeTasks}</div>
						<div className="finished-tasks">Finished tasks: {finishedTasks}</div>
					</div>
					<div className="kanban-author">
						Kanban board by {name}, {year}
					</div>
				</div>
			</div>
		</footer>
	);
};
