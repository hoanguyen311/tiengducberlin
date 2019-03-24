import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container as BootstrapContainer } from 'reactstrap';

function selectBackground({ background }) {
  switch (background) {
    case 'texture':
      return 'url(/img/core-img/texture.png)';
    default:
      return '#FFF';
  }
}

const Container = styled.section`
  padding: 100px 0;
  background: ${selectBackground};
  position: relative;
  &.section_overlay:after {
    background-color: rgba(214, 223, 251, 0.7);
    top: 0;
    left: 0;
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;
export const Content = styled(BootstrapContainer)`
  position: relative;
  z-index: 2;
`;
const Heading = styled.h3`
  position: relative;
  z-index: 2;
  margin-bottom: 70px;
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
`;

export default function Section({ children, background, overlay, title }) {
  const className = overlay ? 'section_overlay' : null;
  return (
    <Container background={background} className={className}>
      {title && <Heading>{title}</Heading>}
      <Content>{children}</Content>
    </Container>
  );
}

Section.defaultProps = {
  background: 'plain',
  children: null,
  overlay: false,
  title: null,
};

Section.propTypes = {
  overlay: PropTypes.bool,
  title: PropTypes.string,
  background: PropTypes.oneOf(['plain', 'texture', 'purple']),
  children: PropTypes.node,
};
