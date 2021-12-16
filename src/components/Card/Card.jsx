import './Card.css';

const Card = ({ task, customClass, submitInProgressOnClick }) => {
	return (
		<>
			<div
				onClick={() => submitInProgressOnClick(task)}
				className={`card ${customClass ? customClass : ''} `}>
				{task}
			</div>
		</>
	);
};

export default Card;