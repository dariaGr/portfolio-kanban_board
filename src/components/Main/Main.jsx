import './Main.css';
import { useStore } from 'react-redux';
import { BacklogCard } from '../BacklogCard';
import { Card } from '../Card';

export const Main = ({
	backlogValue,
	backlogClicked,
	readyClicked,
	inProgressClicked,
	finishedClicked,
	handleClick,
	handleEmptyClick,
	submitBacklogOnClick,
	backlogOnChange,
	submitOnClick,
	submitReadyOnClick,
	submitInProgressOnClick,
	submitFinishedOnClick,
}) => {
	const store = useStore();
	const backlogTasks = store.getState().tasks.backlogTasks;
	const readyTasks = store.getState().tasks.readyTasks;
	const inProgressTasks = store.getState().tasks.inProgressTasks;
	const finishedTasks = store.getState().tasks.finishedTasks;

	return (
		<main className="main">
			<div className="container">
				<div className="main-body">
					<div className="task-container">
						{/* Backlog */}
						<BacklogCard
							blockTitle="Backlog"
							linkTo="/backlog"
							tasks={backlogTasks}
							clicked={backlogClicked}
							submitOnClick={submitBacklogOnClick}
							value={backlogValue}
							onChange={backlogOnChange}
							handleClick={handleClick('backlog')}
						/>
					</div>
					<div className="task-container">
						{/* Ready */}
						<Card
							blockTitle="Ready"
							linkTo="/ready"
							tasks={readyTasks}
							prevTasks={backlogTasks}
							clicked={readyClicked}
							handleClick={handleClick('ready')}
							handleEmptyClick={handleEmptyClick('ready')}
							submitOnClick={submitReadyOnClick}
						/>
					</div>
					<div className="task-container">
						{/* In Progress */}
						<Card
							blockTitle="In Progress"
							linkTo="/in-progress"
							tasks={inProgressTasks}
							prevTasks={readyTasks}
							clicked={inProgressClicked}
							handleClick={handleClick('inProgress')}
							handleEmptyClick={handleEmptyClick('inProgress')}
							submitOnClick={submitInProgressOnClick}
						/>
					</div>
					<div className="task-container">
						{/* Finished */}
						<Card
							blockTitle="Finished"
							linkTo="/finished"
							tasks={finishedTasks}
							prevTasks={inProgressTasks}
							clicked={finishedClicked}
							handleClick={handleClick('finished')}
							handleEmptyClick={handleEmptyClick('finished')}
							submitOnClick={submitFinishedOnClick}
						/>
					</div>
				</div>
			</div>
		</main>
	);
};
