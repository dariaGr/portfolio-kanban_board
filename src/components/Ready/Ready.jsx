import { connect } from 'react-redux';
import './Ready.css';
import { Link } from 'react-router-dom';

const Ready = ({
	readyTasks,
	handleReadyEmptyClick,
	handleReadyClick,
	readyClicked,
	backlogTasks,
	submitReadyOnClick,
}) => {
	return (
		<>
			<div className="task-block">
				<div className="block-title">
					<Link to="/ready">Ready</Link>
				</div>
				{readyTasks.map((task) => (
					<div className="card" key={Math.random()}>
						{task}
					</div>
				))}
				{!readyClicked && (
					<div className="add-card" onClick={handleReadyClick}>
						Add card
					</div>
				)}
				{readyClicked && <div className="block-empty" onClick={handleReadyEmptyClick}></div>}
			</div>
			{readyClicked && (
				<div>
					{backlogTasks.map((task) => (
						<div
							className="card card-passed"
							key={Math.random()}
							onClick={() => submitReadyOnClick(task)}>
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
		backlogTasks: state.tasks.backlogTasks,
		readyTasks: state.tasks.readyTasks,
	};
};

export default connect(mapStateToProps, null)(Ready);
