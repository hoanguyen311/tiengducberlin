import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FacebookOption, MailOption, Phone } from 'grommet-icons';
import { tablet } from '$utils/refactor/media-query';

const lightTheme = {
  global: {
    textColor: '#212529',
    iconColor: '#000',
    borderColor: '#ebebeb',
  },
  container: {
    backgroundColor: '#f7f7f7',
  },
};
const darkTheme = {
  global: {
    textColor: '#fffffff9',
    iconColor: '#fffffff9',
    borderColor: '#4c4c4c',
  },
  container: {
    backgroundColor: '#252525',
  },
};
const themes = {
  dark: darkTheme,
  light: lightTheme,
};

const NavItem = styled.span`
  border-left: 1px solid ${props => props.borderColor};
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  min-width: 50px;
  text-decoration: none;
  padding: 0 7px;
  svg {
    opacity: 0.5;
    fill: ${props => props.iconColor};
    stroke: ${props => props.iconColor};
    transition-duration: 0.2s;
  }
  &:hover svg {
    opacity: 1;
  }
`;

const Pane = styled.nav`
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  height: 40px;
`;

const PaneLeft = styled(Pane)`
  align-self: auto;
  justify-content: flex-start;
  border-bottom: 1px solid ${props => props.borderColor};
  @media screen and ${tablet} {
    border: none;
  }
  ${NavItem} {
    border-left: none;
    border-right: 1px solid ${props => props.borderColor};
  }
`;

const Container = styled.div`
  background: ${props => props.backgroundColor};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media screen and ${tablet} {
    flex-direction: row;
  }
`;

const NavItemText = styled.span`
  line-height: 40px;
  color: ${props => props.textColor};
  font-size: 12px;
  padding-left: 5px;
`;

function ContactNav({ theme = 'light' }) {
  const themeConfig = themes[theme];
  return (
    <Container {...themeConfig.container} {...themeConfig.global}>
      <PaneLeft {...themeConfig.global}>
        <NavItem {...themeConfig.global}>
          <Phone size="small" />
          <NavItemText {...themeConfig.global}>Hotline: 0707920309 - 0842898619</NavItemText>
        </NavItem>
      </PaneLeft>
      <Pane>
        <NavItem
          {...themeConfig.global}
          target="_blank"
          as="a"
          href="https://www.facebook.com/yourchoiceistrue/"
        >
          <FacebookOption size="small" />
        </NavItem>
        <NavItem {...themeConfig.global} as="a" href="mailto:tiengducberlin@gmail.com">
          <MailOption size="small" />
          <NavItemText {...themeConfig.global}>tiengducberlin@gmail.com</NavItemText>
        </NavItem>
      </Pane>
    </Container>
  );
}
ContactNav.defaultProps = {
  theme: 'light',
};
ContactNav.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']),
};
export default ContactNav;
