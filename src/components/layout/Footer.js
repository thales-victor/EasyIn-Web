import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FooterNav from './partials/FooterNav';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

class Footer extends React.Component {

  render() {
    const {
      className,
      topOuterDivider,
      topDivider,
      ...props
    } = this.props;

    const classes = classNames(
      'site-footer center-content-mobile',
      topOuterDivider && 'has-top-divider',
      className
    );

    return (
      <footer
        {...props}
        className={classes}
      >
        <div className="container">
          <div className={
            classNames(
              'site-footer-inner',
              topDivider && 'has-top-divider'
            )}>
            
            <div className="footer-bottom space-between text-xxs invert-order-desktop">
              <FooterNav />
              <div className="footer-copyright"> </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;