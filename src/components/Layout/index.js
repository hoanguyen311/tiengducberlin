import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby";
import { Grommet, Box } from 'grommet';
import theme from './theme';
import { StickyContainer, Sticky } from 'react-sticky';
import styled from 'styled-components';
import TopNav from '@components/TopNav';
import Header from "@components/Header"
import GlobalStyle from './global-style';

const Content = styled.main`
`;

const Layout = ({ children }) => (
  <Grommet theme={theme}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => {
        const renderStickyHeader = ({ isSticky }) => (
          <Header
            isSticky={isSticky}
            siteTitle={data.site.siteMetadata.title}
          />
        );

        return (
          <StickyContainer>
            <GlobalStyle />
            <TopNav />
            <Sticky topOffset={40}>
              {renderStickyHeader}
            </Sticky>
            <Content>
              {children}
            </Content>
          </StickyContainer>
        );
      }}
    />
  </Grommet>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
