import React from 'react';
import ReactDOM from 'react-dom';

// react-hot-loader setup
import {AppContainer} from 'react-hot-loader';


// redux
import store from './stores';
import {Provider} from 'react-redux';



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
  <Provider store={store.configureStore()}>
    
    	<AppContainer>
    		{routes}
    	</AppContainer>
      
  </Provider>,
	document.getElementById('root')
);
