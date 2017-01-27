import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import injectTapEventPlugin from 'react-tap-event-plugin';
import thunk from 'redux-thunk';

import reducer from './reducers';
import App from './App';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App></App>
        </MuiThemeProvider>
    </Provider>,
  document.getElementById('root')
);
