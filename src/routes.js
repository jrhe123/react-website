import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';



// Components
import Home from './components/containers/Home/Home';
import Alert from './components/containers/Alert/Alert';
import Countup from './components/containers/Countup/Countup';
import Motion from './components/containers/Motion/Motion';
import CollapseAccordion from './components/containers/CollapseAccordion/CollapseAccordion';
import UIMask from './components/containers/UIMask/UIMask';
import Datepicker from './components/containers/Datepicker/Datepicker';
import Signature from './components/containers/Signature/Signature';
import Camera from './components/containers/Camera/Camera';
import MobileCamera from './components/containers/MobileCamera/MobileCamera';
import Scroll from './components/containers/Scroll/Scroll';
import MasonryPage from './components/containers/Masonry/Masonry';
import Modal from './components/containers/Modal/Modal';
import App from './components/layout/App/App';



// react-hot-loader setup
Router.prototype.componentWillReceiveProps = function(nextProps) {
  let components = [];
  function grabComponents(element) {
    // This only works for JSX routes, adjust accordingly for plain JS config
    if (element.props && element.props.component) {
      components.push(element.props.component);
    }
    if (element.props && element.props.children) {
      React.Children.forEach(element.props.children, grabComponents);
    }
  }
  grabComponents(nextProps.routes || nextProps.children);
  components.forEach(React.createElement); // force patching
};


export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/alert" component={Alert} />
      <Route path="/countup" component={Countup} />
      <Route path="/motion" component={Motion} />
      <Route path="/collapseAccordion" component={CollapseAccordion} />
      <Route path="/uimask" component={UIMask} />
      <Route path="/datepicker" component={Datepicker} />
      <Route path="/signature" component={Signature} />
      <Route path="/camera" component={Camera} />
      <Route path="/mobile" component={MobileCamera} />
      <Route path="/scroll" component={Scroll} />
      <Route path="/masonry" component={MasonryPage} />
      <Route path="/modal" component={Modal} />
    </Route>
  </Router>
);
