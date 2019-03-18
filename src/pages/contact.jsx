import React from 'react';
import Layout from '$components/Layout';
import SEO from '$components/SEO';
import Section from '$components/Section';
import ContactInfo from '$components/ContactInfo';
import ContactForm from '$components/ContactForm';
import styled, { css } from 'styled-components';
import media from '../utils/media-query';

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
`;

const Info = styled(ContactInfo)`
  margin-bottom: 30px;
  background: #fff;
  ${media.medium(css`
    width: 49%;
  `)}
`;
const Form = styled(ContactForm)`
  ${media.medium(css`
    width: 49%;
    margin-top: -70px;
  `)}
`;

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Section background="texture">
      <Content>
        <Info />
        <Form />
      </Content>
    </Section>
  </Layout>
);

export default ContactPage;
