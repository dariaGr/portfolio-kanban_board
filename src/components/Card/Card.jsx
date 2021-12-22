import { Link } from 'react-router-dom';

export const Card = ({
	linkTo,
	clicked,
	blockTitle,
	tasks,
	handleClick,
	prevTasks,
	submitOnClick,
	handleEmptyClick,
}) => {
	return (
		<>
			<div className="task-block">
				<div className="block-title">
					<Link to={linkTo}>{blockTitle}</Link>
				</div>
				<ul>
					{tasks.map((task) => (
						<li className="card" key={Math.random()}>
							{task}
						</li>
					))}
				</ul>
				{!clicked && (
					<button className="add-card" onClick={handleClick}>
						Add card
					</button>
				)}
				{clicked && <div className="block-empty" onClick={handleEmptyClick}></div>}
			</div>
			{clicked && (
				<div>
					{prevTasks.map((task) => (
						<div
							className="card card-passed"
							key={Math.random()}
							onClick={() => submitOnClick(task)}>
							{task}
						</div>
					))}
				</div>
			)}
		</>
	);
};
