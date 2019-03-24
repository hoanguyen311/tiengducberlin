import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import shortid from 'shortid';
import { FormDown } from 'grommet-icons';
import styled from 'styled-components';
import classNames from 'classnames';
import { tablet, desktop } from '$utils/refactor/media-query';

const ExpandIcon = styled(FormDown)`
  transition-duration: 0.2s;
  &.expanded {
    transform: rotate(180deg);
  }

  @media screen and ${tablet} {
    &.expanded {
      transform: none;
    }
  }
`;

const MenuItemLink = styled(Link)`
  padding: 0 10px;
  color: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  line-height: 38px;
  font-size: 14px;
  transition: color 0.2s linear;
  &:hover {
    text-decoration: none;
    color: #000;
  }
`;
const MenuItem = styled.div`
  font-weight: 600;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  position: relative;
  &:last-child {
    border: none;
  }
`;

export const Menu = styled.nav`
  width: 100%;
  padding-top: ${props => (props.isSubMenu ? 0 : '70px')};
  background-color: ${props => (props.isSubMenu ? '#FFF' : '#f2f4f8')};
  margin-bottom: 20px;
  @media screen and ${desktop} {
    flex: 1;
    margin-right: 20px;
    margin-bottom: 0;
  }

  &.menu_type_sub ${MenuItem} {
    border-bottom-color: rgba(242, 244, 248, 0.7);
  }

  &.menu_type_sub {
    z-index: 4;
    margin-bottom: 0;
    @media screen and ${desktop} {
      opacity: 0;
      display: block;
      visibility: hidden;
      position: absolute;
      transition-duration: 0.3s;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
      background: #fff;
      width: 180px;
      top: 120%;
      right: 0;
    }
  }
  ${/* sc-selector */ MenuItem}:hover &.menu_type_sub {
    @media screen and ${tablet} {
      opacity: 1;
      visibility: visible;
      top: 100%;
    }
  }
  @media screen and ${tablet} {
    display: flex;
    background: none;
    padding: 0;
  }
`;

function MainNavItem({ to, label, children }) {
  const viewport = 'small';

  if (!children) {
    return (
      <MenuItem key={shortid.generate()}>
        <MenuItemLink to={to} as={children ? 'div' : null}>
          {label}
        </MenuItemLink>
      </MenuItem>
    );
  }

  const [isExpaned, setExpand] = useState(true);
  const handleClick =
    viewport === 'small'
      ? () => {
          setExpand(!isExpaned);
        }
      : null;
  const iconClassName = classNames({
    expanded: isExpaned,
  });
  const showChildren = isExpaned || viewport !== 'small';
  return (
    <MenuItem key={label}>
      <MenuItemLink onClick={handleClick} as="div">
        {label}
        <ExpandIcon className={iconClassName} size="medium" color="#858585" />
      </MenuItemLink>
      {showChildren && (
        <Menu isSubMenu className="menu_type_sub">
          {children.map(item => (
            <MainNavItem key={shortid.generate()} {...item} />
          ))}
        </Menu>
      )}
    </MenuItem>
  );
}

MainNavItem.defaultProps = {
  to: '',
  label: '',
  children: null,
};
MainNavItem.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

export default MainNavItem;
