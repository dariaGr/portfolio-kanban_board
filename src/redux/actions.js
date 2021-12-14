import { CREATE_BACKLOG_TASK } from './types';
import { CREATE_READY_TASK } from './types';
import { REMOVE_BACKLOG_TASK } from './types';
import { CREATE_INPROGRESS_TASK } from './types';
import { REMOVE_READY_TASK } from './types';
import { CREATE_FINISHED_TASK } from './types';
import { REMOVE_INPROGRESS_TASK } from './types';

export function createBacklogTask(task) {
	return {
		type: CREATE_BACKLOG_TASK,
		payload: task,
	};
}

export function createReadyTask(task) {
	return {
		type: CREATE_READY_TASK,
		payload: task,
	};
}

export function removeBacklogTask(task) {
	return {
		type: REMOVE_BACKLOG_TASK,
		payload: task,
	};
}

export function createInProgressTask(task) {
	return {
		type: CREATE_INPROGRESS_TASK,
		payload: task,
	};
}

export function removeReadyTask(task) {
	return {
		type: REMOVE_READY_TASK,
		payload: task,
	};
}

export function createFinishedTask(task) {
	return {
		type: CREATE_FINISHED_TASK,
		payload: task,
	};
}

export function removeInProgressTask(task) {
	return {
		type: REMOVE_INPROGRESS_TASK,
		payload: task,
	};
}
