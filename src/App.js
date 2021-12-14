import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
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
// import AppRouter from './routes';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import BacklogPage from './pages/BacklogPage';
import ReadyPage from './pages/ReadyPage';
import InProgressPage from './pages/InProgressPage';
import FinishedPage from './pages/FinishedPage';
import NotFound from './pages/NotFound';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			backlogClicked: false,
			backlogInputValue: '',
			readyClicked: false,
			// deletedTask: false,
			inProgressClicked: false,
			finishedClicked: false,
		};

		this.handleClick = this.handleClick.bind(this);
		this.submitOnClick = this.submitOnClick.bind(this);
		this.handleReadyClick = this.handleReadyClick.bind(this);
		this.handleReadyEmptyClick = this.handleReadyEmptyClick.bind(this);
		this.submitReadyOnClick = this.submitReadyOnClick.bind(this);
		this.handleInProgressClick = this.handleInProgressClick.bind(this);
		this.handleInProgressEmptyClick = this.handleInProgressEmptyClick.bind(this);
		this.submitInProgressOnClick = this.submitInProgressOnClick.bind(this);
		this.submitReadyOnClick = this.submitReadyOnClick.bind(this);
		this.handleFinishedClick = this.handleFinishedClick.bind(this);
		this.handleFinishedEmptyClick = this.handleFinishedEmptyClick.bind(this);
		this.submitFinishedOnClick = this.submitFinishedOnClick.bind(this);
	}

	handleClick() {
		this.setState({ backlogClicked: true });
	}

	handleReadyClick() {
		this.setState({ readyClicked: true });
	}

	handleInProgressClick() {
		this.setState({ inProgressClicked: true });
	}

	handleFinishedClick() {
		this.setState({ finishedClicked: true });
		console.log('handle finished click');
	}

	handleReadyEmptyClick() {
		this.setState({ readyClicked: false });
	}

	handleInProgressEmptyClick() {
		this.setState({ inProgressClicked: false });
	}

	handleFinishedEmptyClick() {
		this.setState({ finishedClicked: false });
	}

	backlogOnChange = (event) => {
		this.setState({
			backlogInputValue: event.target.value,
		});
	};

	submitOnClick() {
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
	}

	submitReadyOnClick(value) {
		const ReadyTasks = this.props.backlogTasks;
		const newReadyTask = value;
		const newReadyDate = new Date().toLocaleString();
		const newReadyTaskIndex = ReadyTasks.indexOf(value);
		this.props.createReadyTask(newReadyTask);
		this.props.createReadyDate(newReadyDate);
		this.props.removeBacklogTask(newReadyTaskIndex);

		// this.setState({ deletedTask: true });
	}

	submitInProgressOnClick(value) {
		const InProgressTasks = this.props.readyTasks;
		const newInProgressTask = value;
		const newInProgressDate = new Date().toLocaleString();
		const newInProgressTaskIndex = InProgressTasks.indexOf(value);
		this.props.createInProgressTask(newInProgressTask);
		this.props.createInProgressDate(newInProgressDate);
		this.props.removeReadyTask(newInProgressTaskIndex);

		// this.setState({ deletedTask: true });
	}

	submitFinishedOnClick(value) {
		const FinishedTasks = this.props.inProgressTasks;
		const newFinishedTask = value;
		const newFinishedDate = new Date().toLocaleString();
		const newFinishedTaskIndex = FinishedTasks.indexOf(value);
		this.props.createFinishedTask(newFinishedTask);
		this.props.createFinishedDate(newFinishedDate);
		this.props.removeInProgressTask(newFinishedTaskIndex);

		// this.setState({ deletedTask: true });
	}

	// submitCardOnClick(value) {
	// 	this.submitReadyOnClick(value);
	// 	this.submitInProgressOnClick(value);
	// }

	render() {
		const {
			inProgressClicked,
			deletedTask,
			readyClicked,
			backlogClicked,
			backlogValue,
			finishedClicked,
		} = this.state;
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
									deletedTask={deletedTask}
									submitOnClick={this.submitOnClick}
									submitReadyOnClick={this.submitReadyOnClick}
									handleClick={this.handleClick}
									backlogClicked={backlogClicked}
									backlogValue={backlogValue}
									backlogOnChange={this.backlogOnChange}
									handleReadyClick={this.handleReadyClick}
									readyClicked={readyClicked}
									handleReadyEmptyClick={this.handleReadyEmptyClick}
									handleInProgressEmptyClick={this.handleInProgressEmptyClick}
									handleInProgressClick={this.handleInProgressClick}
									inProgressClicked={inProgressClicked}
									submitInProgressOnClick={this.submitInProgressOnClick}
									handleFinishedEmptyClick={this.handleFinishedEmptyClick}
									handleFinishedClick={this.handleFinishedClick}
									finishedClicked={finishedClicked}
									submitFinishedOnClick={this.submitFinishedOnClick}
								/>
							)}
						/>
						<Route path="/backlog" component={BacklogPage} />
						<Route path="/ready" component={ReadyPage} />
						<Route path="/inprogress" component={InProgressPage} />
						<Route path="/finished" component={FinishedPage} />
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
		readyTasks: state.tasks.readyTasks,
		inProgressTasks: state.tasks.inProgressTasks,
		finishedTasks: state.tasks.finishedTasks,
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
