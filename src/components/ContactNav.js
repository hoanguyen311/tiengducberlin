import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FacebookOption, MailOption, Phone } from 'grommet-icons';

const Container = styled.div`
  background: ${props => props.backgroundColor};
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled(Link)`
  display: block;
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

const NavItemText = styled.span`
  line-height: 40px;
  color: ${props => props.textColor};
  font-size: 12px;
  padding-left: 5px;
`;

const SocialNav = styled.nav`
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  height: 40px;
`;

const Pane = styled(SocialNav)`
  align-self: auto;
  ${NavItem} {
    border-left: none;
    border-right: 1px solid ${props => props.borderColor};
  }
`;

function ContactNav({ theme = 'light' }) {
  const themeConfig = themes[theme];
  return (
    <Container {...themeConfig.container} {...themeConfig.global}>
      <Pane {...themeConfig.global}>
        <NavItem {...themeConfig.global}>
          <Phone size="small" /> <NavItemText {...themeConfig.global}>Hotline: 0707920309 - 0842898619</NavItemText>
        </NavItem>
      </Pane>
      <SocialNav>
        <NavItem {...themeConfig.global} target="_blank" as="a" href="https://www.facebook.com/yourchoiceistrue/"> 
          <FacebookOption size="small" />
        </NavItem>
        <NavItem {...themeConfig.global} as="a" href="mailto:tiengducberlin@gmail.com">
          <MailOption size="small" />
          <NavItemText {...themeConfig.global}>tiengducberlin@gmail.com</NavItemText>
        </NavItem>
      </SocialNav>
    </Container>
  );
}

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
PropTypes.defaultProps = {
  theme: 'light',
};
PropTypes.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']),
};
export default ContactNav;
