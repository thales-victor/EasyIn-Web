import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import PrivateLayout from './layouts/PrivateLayout';

// Views 
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import DashboardPage from './views/private/dashboard';
import CredentialsPage from './views/private/credentials';
import CredentialsFormPage from './views/private/credentials/form';
import HelpPage from './views/private/help';
import HistoryPage from './views/private/history';
import ProfilePage from './views/private/profile';
import Recover from './views/Recover'
import QrCodePage from './views/public/QrCode';
import LoadingContext from './services/context/loadingContext';

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
            <LoadingContext.Provider>
              <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
              <AppRoute exact path="/login" component={Login} layout={LayoutDefault} />
              <AppRoute exact path="/register" component={Register} layout={LayoutDefault} />
              <AppRoute exact path="/recover" component={Recover} layout={LayoutDefault} />
              <AppRoute exact path="/home" component={DashboardPage} layout={PrivateLayout} />
              <AppRoute exact path="/credentials" component={CredentialsPage} layout={PrivateLayout} />
              <AppRoute exact path="/credentials/:id" component={CredentialsFormPage} layout={PrivateLayout} />
              <AppRoute exact path="/help" component={HelpPage} layout={PrivateLayout} />
              <AppRoute exact path="/history" component={HistoryPage} layout={PrivateLayout} />
              <AppRoute exact path="/profile" component={ProfilePage} layout={PrivateLayout} />
              <AppRoute exact path="/qrcode/:platformId/:browserToken" component={QrCodePage} />
            </LoadingContext.Provider>
          </Switch>
        )} />
    );
  }
}

export default withRouter(props => <App {...props} />);