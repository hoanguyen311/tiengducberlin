import React from 'react';
import Layout from '$components/Layout';
import SEO from '$components/SEO';
import Hero from '$components/Hero';
import Section from '$components/Section';
import Reasons from '$components/Reasons';
import Testimonials from '$components/Testimonials';

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Section title="Vì sao nên chọn Tiếng Đức Berlin">
      <Reasons />
    </Section>
    <Section title="Cảm nhận học viên" background="texture" overlay>
      <Testimonials />
    </Section>
  </Layout>
);

export default HomePage;
