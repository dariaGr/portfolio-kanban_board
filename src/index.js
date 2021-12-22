import 'normalize.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { App } from './App';
import { rootReducer } from './redux/rootReducer';
import reportWebVitals from './reportWebVitals';

const store = createStore(
	rootReducer,
	compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

const app = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(<React.StrictMode>{app}</React.StrictMode>, document.getElementById('root'));

reportWebVitals();
