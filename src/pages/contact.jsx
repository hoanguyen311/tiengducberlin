import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Row, Col } from 'reactstrap';
import Layout from '$components/Layout';
import SEO from '$components/SEO';
import Section from '$components/Section';
import ContactInfo from '$components/ContactInfo';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Section background="texture">
      <Row>
        <Col xs={12} lg={6}>
          <ContactInfo />
        </Col>
      </Row>
    </Section>
  </Layout>
);

export default ContactPage;
