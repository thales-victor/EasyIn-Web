import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Dashboard from './views/private/Dashboard';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

class App extends React.Component {

  componentDidMount() {
    const page = this.props.location.pathname;
    document.body.classList.add('is-loaded')
    this.refs.scrollReveal.init();
    trackPage(page); 
  }

  // Route change
  componentDidUpdate(prevProps) {
    const currentPage = prevProps.location.pathname + prevProps.location.search;
    const nextPage = this.props.location.pathname + this.props.location.search;    
    if (currentPage !== nextPage) {
      this.refs.scrollReveal.init();
      trackPage(nextPage);
    }
  }

  render() {
    return (
      <ScrollReveal
        ref="scrollReveal"
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
            <AppRoute exact path="/login" component={Login} layout={LayoutDefault} />
            <AppRoute exact path="/register" component={Register} layout={LayoutDefault} />
            <AppRoute exact path="/home" component={Dashboard} />
          </Switch>
        )} />
    );
  }
}

export default withRouter(props => <App {...props} />);