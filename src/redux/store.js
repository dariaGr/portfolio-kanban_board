export const initialState = {
	backlogTasks: ['Login page - performance issues', 'Sprint bugfix'],
	readyTasks: ['Shop page – performance issues', 'Checkout bugfix', 'Shop bug1'],
	inProgressTasks: ['User page – performance issues', 'Auth bugfix'],
	finishedTasks: ['Main page – performance issues', 'Main page bugfix'],
	backlogInfo: [
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, assumenda.',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, expedita.',
	],
	readyInfo: [
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, blanditiis. Lorem ipsum dolor sit amet',
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit?',
		'consectetur adipisicing elit. Similique, omnis. Lorem ipsum dolor sit amet, consectetur adipisicing',
	],
	inProgressInfo: [
		'elit. Quos, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,',
		'quibusdam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, odio.',
	],
	finishedInfo: [
		'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit?',
	],
	backlogDate: [new Date().toLocaleString(), new Date().toLocaleString()],
};
