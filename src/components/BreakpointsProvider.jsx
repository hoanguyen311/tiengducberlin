/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';
import { breakpoints as breakpointsConfig } from '$utils/refactor/media-query';

export const BreakpointsContext = React.createContext({
  current: breakpointsConfig[0],
});

export default class BreakpointsProvider extends Component {
  static defaultProps = {
    breakpoints: breakpointsConfig,
    children: null,
  };

  static propTypes = {
    breakpoints: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.oneOf(breakpointsConfig.map(x => x.name)),
        value: PropTypes.oneOf(breakpointsConfig.map(x => x.value)),
      })
    ),
    children: PropTypes.node,
  };

  handleResize = throttle(() => {
    this.calculateBreakpoint();
  }, 500);

  constructor(props) {
    super(props);

    this.state = {
      current: props.breakpoints[0],
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize, false);
    this.calculateBreakpoint();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize, false);
  }

  calculateBreakpoint = () => {
    const { breakpoints } = this.props;
    const width = window.outerWidth;
    const current = breakpoints.reduce((result, breakpoint) => {
      if (width >= breakpoint.value) {
        return breakpoint;
      }
      return result;
    }, breakpoints[0]);

    this.setState({
      current,
    });
  };

  render() {
    const { children } = this.props;

    return <BreakpointsContext.Provider value={this.state}>{children}</BreakpointsContext.Provider>;
  }
}

export * from '$utils/refactor/media-query';
