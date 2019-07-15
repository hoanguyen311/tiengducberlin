import PropTypes from 'prop-types';
import React from 'react';
import MainNav from '$components/MainNav';
import { Link } from 'gatsby';
import styled from 'styled-components';
import classNames from 'classnames';

const Container = styled.header`
  height: 80px;
  display: flex;
  padding: 0.5em 2em;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  z-index: 10;
  border-top: 1px solid #ebebeb;
  box-shadow: 0 3px 5px rgba(0,0,0,0.15);
  position: relative;
  &.header_stucked {
    border-top: none;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  align-content: center;
`;

const LogoImage = styled.img`
  margin: 0 8px 0 0;
  width: 60px;
  height: 60px;
`;

const Header = props => {
  const { siteTitle, siteLogo, isSticky } = props;
  const className = classNames({
    header_stucked: isSticky,
  });
  return (
    <Container className={className}>
      <Logo to="/home">
        <LogoImage alt={siteTitle} src={siteLogo} />
      </Logo>
      <MainNav />
    </Container>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteLogo: PropTypes.string,
  isSticky: PropTypes.bool,
};

Header.defaultProps = {
  isSticky: false,
  siteTitle: ``,
  siteLogo: '/img/logo.jpg',
};

export default Header;
