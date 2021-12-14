export const initialState = {
	backlogTasks: ['Login page - performance issues', 'Sprint bugfix'],
	backlogDate: [new Date().toLocaleString(), new Date().toLocaleString()],
	readyTasks: ['Shop page – performance issues', 'Checkout bugfix', 'Shop bug1'],
	readyDate: [
		new Date().toLocaleString(),
		new Date().toLocaleString(),
		new Date().toLocaleString(),
	],
	inProgressTasks: ['User page – performance issues', 'Auth bugfix'],
	inProgressDate: [new Date().toLocaleString(), new Date().toLocaleString()],
	finishedTasks: ['Main page – performance issues', 'Main page bugfix'],
	finishedDate: [new Date().toLocaleString(), new Date().toLocaleString()],
};
