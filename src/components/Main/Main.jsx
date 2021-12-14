import './Main.css';
import Backlog from '../Backlog/Backlog';
import Ready from '../Ready/Ready';
import InProgress from '../InProgress/InProgress';
import Finished from '../Finished/Finished';

const Main = ({
	deletedTask,
	handleClick,
	handleReadyClick,
	backlogClicked,
	submitOnClick,
	submitReadyOnClick,
	backlogOnChange,
	backlogValue,
	readyClicked,
	handleReadyEmptyClick,
	handleInProgressEmptyClick,
	handleInProgressClick,
	inProgressClicked,
	submitInProgressOnClick,
	handleFinishedEmptyClick,
	handleFinishedClick,
	finishedClicked,
	submitFinishedOnClick,
}) => {
	return (
		<div className="main">
			<div className="task-container">
				<Backlog
					submitOnClick={submitOnClick}
					handleClick={handleClick}
					backlogClicked={backlogClicked}
					backlogOnChange={backlogOnChange}
					backlogValue={backlogValue}
					deletedTask={deletedTask}
				/>
			</div>
			<div className="task-container">
				<Ready
					handleReadyClick={handleReadyClick}
					readyClicked={readyClicked}
					handleReadyEmptyClick={handleReadyEmptyClick}
					submitReadyOnClick={submitReadyOnClick}
				/>
			</div>
			<div className="task-container">
				<InProgress
					handleInProgressEmptyClick={handleInProgressEmptyClick}
					handleInProgressClick={handleInProgressClick}
					inProgressClicked={inProgressClicked}
					submitInProgressOnClick={submitInProgressOnClick}
				/>
			</div>
			<div className="task-container">
				<Finished
					handleFinishedEmptyClick={handleFinishedEmptyClick}
					handleFinishedClick={handleFinishedClick}
					finishedClicked={finishedClicked}
					submitFinishedOnClick={submitFinishedOnClick}
				/>
			</div>
		</div>
	);
};

export default Main;
