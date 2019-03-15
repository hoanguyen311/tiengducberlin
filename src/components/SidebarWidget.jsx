import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.section`
  position: relative;
  z-index: 1;
  padding: 35px 30px;
  border: 1px solid #ebebeb;
  border-bottom: none;
`;
const Heading = styled.h4`
  margin-bottom: 20px;
  font-size: 24px;
  display: block;
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.3;
  font-weight: 700;
`;
const Content = styled.main``;

const SidebarWidget = ({ title, children }) => {
  return (
    <Container>
      {title && <Heading>{title}</Heading>}
      <Content>{children}</Content>
    </Container>
  );
};

SidebarWidget.defaultProps = {
  title: null,
};
SidebarWidget.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SidebarWidget;
