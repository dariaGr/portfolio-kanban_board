import { connect } from 'react-redux';
import './Finished.css';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

const Finished = ({
	finishedTasks,
	inProgressTasks,
	handleFinishedEmptyClick,
	handleFinishedClick,
	finishedClicked,
	submitFinishedOnClick,
}) => {
	return (
		<>
			<div className="task-block">
				<div className="block-title">
					<Link to="/finished">Finished</Link>
				</div>
				{finishedTasks.map((task) => (
					<div className="card" key={Math.random()}>
						{task}
					</div>
				))}
				{!finishedClicked && (
					<div className="add-card" onClick={handleFinishedClick}>
						Add card
					</div>
				)}
				{finishedClicked && <div className="block-empty" onClick={handleFinishedEmptyClick}></div>}
			</div>
			{finishedClicked && (
				<div>
					{inProgressTasks.map((task) => (
						<div
							className="card card-passed"
							key={Math.random()}
							onClick={() => submitFinishedOnClick(task)}>
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
		inProgressTasks: state.tasks.inProgressTasks,
		finishedTasks: state.tasks.finishedTasks,
	};
};

export default connect(mapStateToProps, null)(Finished);
