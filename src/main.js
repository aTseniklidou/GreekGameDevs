import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/createStore';
import './styles/main.scss';
import { analytics } from 'utils';
// Analytics
analytics.initialize();
// Store Initialization
// ------------------------------------
const store = createStore(window.__INITIAL_STATE__);

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById('root');

let render = () => {
  const App = require('./layouts/App').default;
  const routes = require('./routes/index').default(store);

  ReactDOM.render(
    <App store={store} routes={routes} onUpdate={analytics.logPageView} />,
    MOUNT_NODE,
  );
};

// Development Tools
// ------------------------------------
if (__DEV__) {
  if (module.hot) {
    const renderApp = render;
    const renderError = error => {
      const RedBox = require('redbox-react').default;

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE);
    };

    render = () => {
      try {
        renderApp();
      } catch (e) {
        console.error(e);
        renderError(e);
      }
    };

    // Setup hot module replacement
    module.hot.accept(['./layouts/App', './routes/index'], () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render();
      }),
    );
  }
}

// Let's Go!
// ------------------------------------
if (!__TEST__) render();
