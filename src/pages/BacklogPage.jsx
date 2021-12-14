import './TaskPage.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const BacklogPage = ({ backlogTasks, backlogDate }) => {
	function cmp(tasks, date) {
		let newArray = [];

		for (let i = 0; i < tasks.length; i++) {
			if (tasks.indexOf([i]) === date.indexOf([i])) {
				newArray.push([tasks[i], date[i]]);
				console.log('newarray:', newArray);
			}
		}

		return newArray.map((item) => (
			<div className="task-page-tasks" key={Math.random()}>
				<div className="task-page-task">{item[0]}</div>
				<div className="task-page-date">{item[1]}</div>
			</div>
		));
	}

	return (
		<div className="task-page-container">
			<h1 className="task-page-title">Backlog Tasks</h1>

			<div className="task-page-content">
				<div className="task-page-tasks">{cmp(backlogTasks, backlogDate)}</div>
			</div>
			<div className="task-page-exit">
				<Link to="/">
					<span></span>
					<span></span>
				</Link>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		backlogTasks: state.tasks.backlogTasks,
		backlogDate: state.tasks.backlogDate,
	};
};

export default connect(mapStateToProps, null)(BacklogPage);
