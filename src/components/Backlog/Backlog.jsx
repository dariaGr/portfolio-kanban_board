import { connect } from 'react-redux';
import './Backlog.css';
import { Link } from 'react-router-dom';

const Backlog = ({
	deletedTask,
	backlogTasks,
	handleClick,
	backlogClicked,
	submitOnClick,
	backlogValue,
	backlogOnChange,
}) => {
	return (
		<div className="task-block">
			<div className="block-title">
				<Link to="/backlog">Backlog</Link>
			</div>
			<div>
				{backlogTasks.map((task) => (
					<div className="card" key={Math.random()}>
						{task}
					</div>
				))}
			</div>
			{backlogClicked && (
				<input
					className="block-input"
					type="text"
					value={backlogValue}
					onChange={backlogOnChange}></input>
			)}
			{!backlogClicked && (
				<div className="add-card" onClick={handleClick}>
					Add card
				</div>
			)}
			{backlogClicked && (
				<button className="block-submit-btn" onClick={submitOnClick}>
					Submit
				</button>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		backlogTasks: state.tasks.backlogTasks,
	};
};

export default connect(mapStateToProps, null)(Backlog);
