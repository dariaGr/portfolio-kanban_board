import { connect } from 'react-redux';
import './InProgress.css';
import { Link } from 'react-router-dom';

const InProgress = ({
	inProgressTasks,
	readyTasks,
	handleInProgressEmptyClick,
	handleInProgressClick,
	inProgressClicked,
	submitInProgressOnClick,
}) => {
	return (
		<>
			<div className="task-block">
				<div className="block-title">
					<Link to="/inprogress">In Progress</Link>
				</div>
				{inProgressTasks.map((task) => (
					<div className="card" key={Math.random()}>
						{task}
					</div>
				))}
				{!inProgressClicked && (
					<div className="add-card" onClick={handleInProgressClick}>
						Add card
					</div>
				)}
				{inProgressClicked && (
					<div className="block-empty" onClick={handleInProgressEmptyClick}></div>
				)}
			</div>
			{inProgressClicked && (
				<div>
					{readyTasks.map((task) => (
						<div
							className="card card-passed"
							key={Math.random()}
							onClick={() => submitInProgressOnClick(task)}>
							{task}
						</div>
					))}
				</div>
			)}
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		readyTasks: state.tasks.readyTasks,
		inProgressTasks: state.tasks.inProgressTasks,
	};
};

export default connect(mapStateToProps, null)(InProgress);
