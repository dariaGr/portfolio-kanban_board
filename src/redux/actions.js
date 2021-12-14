import { CREATE_BACKLOG_TASK } from './types';
import { CREATE_BACKLOG_DATE } from './types';
import { CREATE_READY_TASK } from './types';
import { CREATE_READY_DATE } from './types';
import { REMOVE_BACKLOG_TASK } from './types';
import { CREATE_INPROGRESS_TASK } from './types';
import { CREATE_INPROGRESS_DATE } from './types';
import { REMOVE_READY_TASK } from './types';
import { CREATE_FINISHED_TASK } from './types';
import { CREATE_FINISHED_DATE } from './types';
import { REMOVE_INPROGRESS_TASK } from './types';

export function createBacklogTask(task) {
	return {
		type: CREATE_BACKLOG_TASK,
		payload: task,
	};
}

export function createBacklogDate(date) {
	return {
		type: CREATE_BACKLOG_DATE,
		payload: date,
	};
}

export function createReadyTask(task) {
	return {
		type: CREATE_READY_TASK,
		payload: task,
	};
}

export function createReadyDate(date) {
	return {
		type: CREATE_READY_DATE,
		payload: date,
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

export function createInProgressDate(date) {
	return {
		type: CREATE_INPROGRESS_DATE,
		payload: date,
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

export function createFinishedDate(date) {
	return {
		type: CREATE_FINISHED_DATE,
		payload: date,
	};
}

export function removeInProgressTask(task) {
	return {
		type: REMOVE_INPROGRESS_TASK,
		payload: task,
	};
}
