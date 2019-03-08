import React from 'react';
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import {
  FacebookOption,
  MailOption,
  Phone
} from "grommet-icons";
import mediaQuery from "@utils/media-query";

const Container = styled.div`
  background: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled(Link)`
    display: block;
    border-left: 1px solid #ebebeb;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    min-width: 50px;
    text-decoration: none;
    padding: 0 7px;

    svg {
        opacity: .5;
        fill: #000;
        stroke: #000;
        transition-duration: .2s;
    }
    &:hover svg {
        opacity: 1;
    }
`;

const NavItemText = styled.span`
  line-height: 40px;
  color: rgba(0, 0, 0, 0.3);
  font-size: 12px;
  padding-left: 5px;
`;

const SocialNav = styled.nav`
    display: flex;
    align-items: stretch;
    justify-content: flex-end;
    height: 40px;
`;

const ContactNav = styled(SocialNav)`
  align-self: auto;
  ${NavItem} {
    border-left: none;
    border-right: 1px solid #ebebeb;
  }
`;

export default function() {
  return (
    <Container>
      <ContactNav>
        <NavItem>
          <Phone size="small" />
          {' '}
          <NavItemText>
            (84) 0938500311
          </NavItemText>
        </NavItem>
      </ContactNav>
      <SocialNav>
          <NavItem>
              <FacebookOption size="small" />
          </NavItem>
          <NavItem>
              <MailOption size="small" />
          </NavItem>
      </SocialNav>
    </Container>
  )
};