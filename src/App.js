import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBacklogTask } from './redux/actions';
import { createBacklogDate } from './redux/actions';
import { createReadyTask } from './redux/actions';
import { createReadyDate } from './redux/actions';
import { removeBacklogTask } from './redux/actions';
import { createInProgressTask } from './redux/actions';
import { createInProgressDate } from './redux/actions';
import { removeReadyTask } from './redux/actions';
import { createFinishedTask } from './redux/actions';
import { createFinishedDate } from './redux/actions';
import { removeInProgressTask } from './redux/actions';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { BacklogPage } from './pages/BacklogPage';
import { ReadyPage } from './pages/ReadyPage';
import { InProgressPage } from './pages/InProgressPage';
import { FinishedPage } from './pages/FinishedPage';
import { NotFound } from './pages/NotFound';

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			backlogInputValue: '',
			backlogClicked: false,
			readyClicked: false,
			inProgressClicked: false,
			finishedClicked: false,
		};
	}

	backlogOnChange = (event) => {
		this.setState({
			backlogInputValue: event.target.value,
		});
	};

	handleClick = (cardName) => {
		return () => {
			switch (cardName) {
				case 'backlog':
					return this.setState({ backlogClicked: true });
				case 'ready':
					return this.setState({ readyClicked: true });
				case 'inProgress':
					return this.setState({ inProgressClicked: true });
				case 'finished':
					return this.setState({ finishedClicked: true });
				default:
					return;
			}
		};
	};

	handleEmptyClick = (cardName) => {
		return () => {
			switch (cardName) {
				case 'ready':
					return this.setState({ readyClicked: false });
				case 'inProgress':
					return this.setState({ inProgressClicked: false });
				case 'finished':
					return this.setState({ finishedClicked: false });
				default:
					return;
			}
		};
	};

	submitBacklogOnClick = () => {
		const { backlogInputValue } = this.state;

		if (!backlogInputValue.trim()) {
			return;
		}

		const newTask = backlogInputValue;
		const newDate = new Date().toLocaleString();

		this.props.createBacklogTask(newTask);
		this.props.createBacklogDate(newDate);

		this.setState({
			backlogInputValue: '',
			backlogClicked: false,
		});
	};

	submitReadyOnClick = (value) => {
		const ReadyTasks = this.props.backlogTasks;
		const newReadyTask = value;
		const newReadyDate = new Date().toLocaleString();
		const newReadyTaskIndex = ReadyTasks.indexOf(value);
		this.props.createReadyTask(newReadyTask);
		this.props.createReadyDate(newReadyDate);
		this.props.removeBacklogTask(newReadyTaskIndex);
	};

	submitInProgressOnClick = (value) => {
		const InProgressTasks = this.props.readyTasks;
		const newInProgressTask = value;
		const newInProgressDate = new Date().toLocaleString();
		const newInProgressTaskIndex = InProgressTasks.indexOf(value);
		this.props.createInProgressTask(newInProgressTask);
		this.props.createInProgressDate(newInProgressDate);
		this.props.removeReadyTask(newInProgressTaskIndex);
	};

	submitFinishedOnClick = (value) => {
		const FinishedTasks = this.props.inProgressTasks;
		const newFinishedTask = value;
		const newFinishedDate = new Date().toLocaleString();
		const newFinishedTaskIndex = FinishedTasks.indexOf(value);
		this.props.createFinishedTask(newFinishedTask);
		this.props.createFinishedDate(newFinishedDate);
		this.props.removeInProgressTask(newFinishedTaskIndex);
	};

	cmp = (tasks, date) => {
		let newArray = [];

		for (let i = 0; i < tasks.length; i++) {
			if (tasks.indexOf([i]) === date.indexOf([i])) {
				newArray.push([tasks[i], date[i]]);
				console.log('newarray:', newArray);
			}
		}

		return newArray.map((item) => (
			<div className="task-page-tasks" key={Math.random()}>
				<div className="task-page-task">{item[0]}</div>
				<div className="task-page-date">{item[1]}</div>
			</div>
		));
	};

	render() {
		const {
			backlogTasks,
			backlogDate,
			readyTasks,
			readyDate,
			inProgressTasks,
			inProgressDate,
			finishedTasks,
			finishedDate,
		} = this.props;
		const { inProgressClicked, readyClicked, backlogClicked, backlogValue, finishedClicked } =
			this.state;
		return (
			<Router>
				<div className="app">
					<Header />
					<Switch>
						<Route
							path="/"
							exact
							render={(props) => (
								<Main
									backlogValue={backlogValue}
									backlogClicked={backlogClicked}
									readyClicked={readyClicked}
									inProgressClicked={inProgressClicked}
									finishedClicked={finishedClicked}
									handleClick={this.handleClick}
									handleEmptyClick={this.handleEmptyClick}
									submitBacklogOnClick={this.submitBacklogOnClick}
									submitReadyOnClick={this.submitReadyOnClick}
									backlogOnChange={this.backlogOnChange}
									submitInProgressOnClick={this.submitInProgressOnClick}
									submitFinishedOnClick={this.submitFinishedOnClick}
								/>
							)}
						/>
						<Route
							path="/backlog"
							render={({ props }) => (
								<BacklogPage cmp={this.cmp} backlogTasks={backlogTasks} backlogDate={backlogDate} />
							)}
						/>
						<Route
							path="/ready"
							render={({ props }) => (
								<ReadyPage cmp={this.cmp} readyTasks={readyTasks} readyDate={readyDate} />
							)}
						/>
						<Route
							path="/in-progress"
							render={({ props }) => (
								<InProgressPage
									cmp={this.cmp}
									inProgressTasks={inProgressTasks}
									inProgressDate={inProgressDate}
								/>
							)}
						/>
						<Route
							path="/finished"
							render={({ props }) => (
								<FinishedPage
									cmp={this.cmp}
									finishedTasks={finishedTasks}
									finishedDate={finishedDate}
								/>
							)}
						/>
						<Route path="*" component={NotFound} />
					</Switch>
					<Footer
						name="Daria Grebenjuk"
						year="2021"
						activeTasks={this.props.backlogTasks.length}
						finishedTasks={this.props.finishedTasks.length}
					/>
				</div>
			</Router>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		backlogTasks: state.tasks.backlogTasks,
		backlogDate: state.tasks.backlogDate,
		readyTasks: state.tasks.readyTasks,
		readyDate: state.tasks.readyDate,
		inProgressTasks: state.tasks.inProgressTasks,
		inProgressDate: state.tasks.inProgressDate,
		finishedTasks: state.tasks.finishedTasks,
		finishedDate: state.tasks.finishedDate,
	};
};

const mapDispatchToProps = {
	createBacklogTask,
	createBacklogDate,
	createReadyTask,
	createReadyDate,
	removeBacklogTask,
	createInProgressTask,
	createInProgressDate,
	removeReadyTask,
	createFinishedTask,
	createFinishedDate,
	removeInProgressTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
