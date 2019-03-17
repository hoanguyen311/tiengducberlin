import React from 'react';
import { Grommet } from 'grommet';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { StickyContainer, Sticky } from 'react-sticky';
import Header from '$components/Header';
import Footer from '$components/Footer';
import ContactNav from '$components/ContactNav';
import FBPlugins from '$components/FBPlugins';
import theme from './theme';
import GlobalStyle from './global-style';

const Content = styled.main`
  background: none;
`;

const Layout = ({ children }) => (
  <div>
    <Helmet>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      />
    </Helmet>
    <GlobalStyle />
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
        return (
          <Grommet theme={theme}>
            <StickyContainer>
              <ContactNav />
              <Sticky topOffset={40}>
                {({ isSticky }) => (
                  <div>
                    <Header isSticky={isSticky} siteTitle={data.site.siteMetadata.title} />
                  </div>
                )}
              </Sticky>
              <Content>{children}</Content>
              <Footer />
              <FBPlugins />
            </StickyContainer>
          </Grommet>
        );
      }}
    />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
