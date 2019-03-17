import React from 'react';
import styled, { css } from 'styled-components';
import { Box } from 'grommet';
import PropTypes from 'prop-types';
import media from '../utils/media-query';

const Container = styled.div`
  width: 100%;
  min-height: 400px;
  position: relative;
  background-size: cover;
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: ${props => `url(${props.backgroundImage})`};
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.medium(css`
    background-attachment: fixed;
  `)}

  &::before {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const Content = styled(Box)`
  text-align: center;
  position: relative;
  z-index: 3;
  display: inline-block;
  padding: 0 10%;
`;

function Hero({ image, children }) {
  return (
    <Container backgroundImage={image}>
      <Content animation="zoomIn"> {children} </Content>
    </Container>
  );
}

Hero.defaultProps = {
  image: '/img/bg-img/bg1.jpg',
  children: null,
};
Hero.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;
