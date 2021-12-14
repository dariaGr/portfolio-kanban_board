import { CREATE_BACKLOG_TASK } from './types';
import { CREATE_BACKLOG_DATE } from './types';
import { CREATE_READY_TASK } from './types';
import { CREATE_READY_DATE } from './types';
import { REMOVE_BACKLOG_TASK } from './types';
import {CREATE_INPROGRESS_TASK} from './types';
import { CREATE_INPROGRESS_DATE } from './types';
import { REMOVE_READY_TASK } from './types';
import {CREATE_FINISHED_TASK} from './types';
import { CREATE_FINISHED_DATE } from './types';
import { REMOVE_INPROGRESS_TASK } from './types';
import { initialState } from './store';

export const tasksReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_BACKLOG_TASK:
			// return { ...state, backlogTasks: [...state.backlogTasks, action.payload] };
			return { ...state, backlogTasks: state.backlogTasks.concat([action.payload]) };
		case CREATE_BACKLOG_DATE:
			// return { ...state, backlogDate: [...state.backlogTasks, action.payload] };
			return { ...state, backlogDate: state.backlogDate.concat([action.payload]) };
		case CREATE_READY_TASK:
			return { ...state, readyTasks: state.readyTasks.concat([action.payload]) };
		case CREATE_READY_DATE:
			// return { ...state, backlogDate: [...state.backlogTasks, action.payload] };
			return { ...state, readyDate: state.readyDate.concat([action.payload]) };
		case REMOVE_BACKLOG_TASK:
			return {
				...state,
				backlogTasks: [
					state.backlogTasks.slice(0, action.payload),
					...state.backlogTasks.slice(action.payload + 1),
				],
			};
		case CREATE_INPROGRESS_TASK:
			return { ...state, inProgressTasks: state.inProgressTasks.concat([action.payload]) };
		case CREATE_INPROGRESS_DATE:
			// return { ...state, backlogDate: [...state.backlogTasks, action.payload] };
			return { ...state, inProgressDate: state.inProgressDate.concat([action.payload]) };
		case REMOVE_READY_TASK:
			return {
				...state,
				readyTasks: [
					state.readyTasks.slice(0, action.payload),
					...state.readyTasks.slice(action.payload + 1),
				],
			};
		case CREATE_FINISHED_TASK:
			return { ...state, finishedTasks: state.finishedTasks.concat([action.payload]) };
		case CREATE_FINISHED_DATE:
			// return { ...state, backlogDate: [...state.backlogTasks, action.payload] };
			return { ...state, finishedDate: state.finishedDate.concat([action.payload]) };
		case REMOVE_INPROGRESS_TASK:
			return {
				...state,
				inProgressTasks: [
					state.inProgressTasks.slice(0, action.payload),
					...state.inProgressTasks.slice(action.payload + 1),
				],
			};

		default:
			return state;
	}
};
