import React from 'react';
import ReactDOM from 'react-dom';

// react-hot-loader setup
import {AppContainer} from 'react-hot-loader';


// Routes contains all components
import routes from './routes';


// styled-component
import './theme/globalStyle';



// react-hot-loader setup
if (module.hot) {
  module.hot.accept('./routes', () => {
    const routes = require('./routes').default;
    ReactDOM.render(
      <AppContainer>
        {routes}
      </AppContainer>,
      document.getElementById('root')
    );
  });
}


ReactDOM.render(
	<AppContainer>
		{routes}
	</AppContainer>,
	document.getElementById('root')
);
