import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby";
import { Grommet } from 'grommet';
import theme from './theme';
import { StickyContainer, Sticky } from 'react-sticky';
import styled from 'styled-components';
import ContactNav from '@components/ContactNav';
import Header from "@components/Header";
import Footer from "@components/Footer";
import Helmet from "react-helmet";
import GlobalStyle from './global-style';

const Content = styled.main`
`;

const Layout = ({ children }) => (
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
          <Grommet theme={theme}>
            <StickyContainer>
              <Helmet>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
              </Helmet>
              <GlobalStyle />
              <ContactNav />
              <Sticky topOffset={40}>
                {renderStickyHeader}
              </Sticky>
              <Content>
                {children}
              </Content>
              <Footer />
            </StickyContainer>
          </Grommet>
          
        );
      }}
    />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
