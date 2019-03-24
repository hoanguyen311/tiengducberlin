import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Menu as MenuIcon, Close as CloseIcon } from 'grommet-icons';
import styled from 'styled-components';
import { tablet } from '../utils/refactor/media-query';
import MainNavItem, { Menu } from './MainNavItem';

const Container = styled.div`
  position: relative;
`;

const MainNavContent = styled.div`
  background-color: #fff;
  position: fixed;
  top: 0;
  left: ${props => (props.visible ? 0 : '-310px')};
  z-index: 1000;
  width: 300px;
  height: 100%;
  padding: 0;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  overflow-x: hidden;
  overflow-y: scroll;
  transition-timing-function: ease-out;
  transition-duration: 0.3s;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and ${tablet} {
    overflow: visible;
    position: static;
    width: auto;
    box-shadow: none;
    flex-direction: row;
  }
`;

const NavCloseIcon = styled(CloseIcon)`
  top: 20px;
  right: 20px;
  z-index: 12;
  position: absolute;
  stroke: #000;

  @media screen and ${tablet} {
    display: none;
  }
`;

function MainNav({ menu = {} }) {
  const [visible, setVisible] = useState(false);
  const handleToggleVisible = () => {
    setVisible(!visible);
  };
  const { items } = menu;

  return (
    <Container>
      <MenuIcon className="d-lg-none" onClick={handleToggleVisible} size="large" color="#858585" />
      <MainNavContent visible={visible}>
        <NavCloseIcon onClick={handleToggleVisible} size="medium" color="#858585" />
        {items && (
          <Menu>
            {items.map(item => (
              <MainNavItem key={shortid.generate()} {...item} />
            ))}
          </Menu>
        )}
      </MainNavContent>
    </Container>
  );
}

const ItemPropType = PropTypes.shape({
  to: PropTypes.string,
  label: PropTypes.string,
});

MainNav.propTypes = {
  menu: PropTypes.shape({
    items: PropTypes.arrayOf(ItemPropType),
  }),
};

MainNav.defaultProps = {
  menu: {
    items: [
      {
        label: 'Trang chủ',
        to: '/home',
      },
      {
        label: 'Khoá học',
        to: '/course',
        children: [
          {
            label: 'A1',
            to: '/course',
          },
          {
            label: 'A2',
            to: '/course',
          },
          {
            label: 'B1',
            to: '/course',
          },
          {
            label: 'Tiếng Đức du lịch',
            to: '/course',
          },
          {
            label: 'Tiếng Đức thiếu nhi',
            to: '/course',
          },
        ],
      },
      {
        label: 'Liên hệ',
        to: '/contact',
      },
    ],
  },
};

export default MainNav;
