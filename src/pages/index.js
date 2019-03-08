import React from "react";
import { Link } from "gatsby";
import { Grid, Box, Image } from 'grommet';

import Layout from "@components/Layout";
import HeroBanner from '@components/HeroBanner';
import SEO from "@components/SEO";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`tiengduc`, `german`, `danang`]} />
    <HeroBanner />
  </Layout>
);

export default IndexPage;
