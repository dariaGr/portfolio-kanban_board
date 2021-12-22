import { Link } from 'react-router-dom';

export const BacklogCard = ({
	linkTo,
	clicked,
	blockTitle,
	tasks,
	value,
	onChange,
	handleClick,
	submitOnClick,
}) => {
	return (
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
			{clicked && (
				<input className="block-input" type="text" value={value} onChange={onChange}></input>
			)}
			{!clicked && (
				<button className="add-card" onClick={handleClick}>
					Add card
				</button>
			)}
			{clicked && (
				<button className="block-submit-btn" onClick={submitOnClick}>
					Submit
				</button>
			)}
		</div>
	);
};
