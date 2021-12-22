import ConnectedApp, { App } from './App';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BacklogCard } from './components/BacklogCard';
import { Card } from './components/Card';
import configureMockStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

const initialState = {
	tasks: {
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
	},
};
const mockStore = configureMockStore();
const store = mockStore(initialState);

describe('rendering components', () => {
	const props = {
		data: {
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
		},
	};
	it('renders App component without crashing', () => {
		// shallow(<App store={store} />);
		const wrapper = shallow(<ConnectedApp store={store} />);
		const AppComponent = wrapper.find(App);
		expect(AppComponent.prop('backlogTasks')).toEqual(props.tasks.backlogTasks);
		expect(AppComponent.prop('backlogDate')).toEqual(props.tasks.backlogDate);
		expect(AppComponent.prop('readyTasks')).toEqual(props.tasks.readyTasks);
		expect(AppComponent.prop('readyDate')).toEqual(props.tasks.readyDate);
		expect(AppComponent.prop('inProgressTasks')).toEqual(props.tasks.inProgressTasks);
		expect(AppComponent.prop('inProgressDate')).toEqual(props.tasks.inProgressDate);
		expect(AppComponent.prop('finishedTasks')).toEqual(props.tasks.finishedTasks);
	});

	// it('renders Header component without crashing', () => {
	// 	const wrapper = shallow(<App store={store} />);
	// 	const header = <Header />;
	// 	expect(wrapper.contains(header)).toEqual(true);
	// });
	// it('renders Footer component without crashing', () => {
	// 	const wrapper = shallow(<App store={store} />);
	// 	const footer = <Footer />;
	// 	expect(wrapper.contains(footer)).toEqual(true);
	// });
	// it('renders Card component without crashing', () => {
	// 	shallow(<Card />);
	// });
	// it('renders BacklogCard component without crashing', () => {
	// 	shallow(<BacklogCard />);
	// });
	// it('renders button Submit', () => {
	// 	const wrapper = mount(<BacklogCard blockTitle="Backlog" linkTo="/backlog" />);
	// 	const label = wrapper.find('.block-submit-btn').text();
	// 	expect(label).toEqual('Submit');
	// });
});

// describe('snapshots', () => {
// 	it('App snapshots', () => {
// 		const tree = shallow(<App store={store} />);
// 		expect(toJson(tree)).toMatchSnapshot();
// 	});
// });
