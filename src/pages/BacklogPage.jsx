import './TaskPage.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const BacklogPage = ({
	backlogTasks,
	backlogInfo,
	backlogDate,
	backlogEdit,
}) => {
	function cmp(tasks, info, date) {
		let newArray = [];

		for (let i = 0; i < tasks.length; i++) {
			if (tasks.indexOf([i]) === info.indexOf([i])) {
				newArray.push([tasks[i], info[i], date[i]]);
				console.log('newarray:', newArray);
			}
		}

		return newArray.map((item, index) => (
			<div className="task-page-tasks" key={Math.random()}>
				<div className="task-page-task">{item[0]}</div>
				<div className="task-page-info">{item[1]}</div>
				<div className="task-page-date">Created: {item[2]}</div>
			</div>
		));
	}

	return (
		<div className="task-page-container">
			<h1 className="task-page-title">Backlog Tasks</h1>

			<div className="task-page-content">
				<div className="task-page-tasks">
					{cmp(backlogTasks, backlogInfo, backlogDate, backlogEdit)}
				</div>
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
		backlogInfo: state.tasks.backlogInfo,
		backlogDate: state.tasks.backlogDate,
	};
};

export default connect(mapStateToProps, null)(BacklogPage);
