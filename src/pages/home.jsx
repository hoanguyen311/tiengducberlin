import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import Layout from '$components/Layout';
import SEO from '$components/SEO';
import Hero from '$components/Hero';
import Section from '$components/Section';
import Reasons from '$components/Reasons';
import Testimonials from '$components/Testimonials';
import CourseList from '$components/CourseList';

const Text = styled.h2`
  font-size: 40px;
  margin-bottom: 30px;
  font-weight: 700;
  color: #ffffff;
  line-height: 50px;
`;

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <Text>
        Khai giảng các lớp tiếng Đức
        <br />
        trình độ A1, A2, B1
      </Text>
      <Button color="primary" size="large">Liên hệ để đăng ký ngay</Button>
    </Hero>
    <Section title="Vì sao nên chọn Tiếng Đức Berlin">
      <Reasons />
    </Section>
    <Section title="Các khoá học" background="texture">
      <CourseList />
    </Section>
    <Section title="Cảm nhận học viên" background="texture" overlay>
      <Testimonials />
    </Section>
  </Layout>
);

export default HomePage;
