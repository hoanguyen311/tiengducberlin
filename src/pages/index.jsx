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
import config from '../config';

const Text = styled.h2`
  font-size: 27px;
  margin-bottom: 30px;
  font-weight: 700;
  color: #ffffff;
  line-height: 50px;
`;

const HomePage = () => {
  const showFBChat = () => {
    window.open(config.registerForm, '_blank');
  };

  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <Text>
          Đào tạo tiếng Đức trình độ A1, A2, B1, B2, C1
          <br />
          (Theo tiêu chuẩn khung ngôn ngữ Châu Âu CEFR)
        </Text>
        <Button as="a" onClick={showFBChat} color="primary">
          Đăng ký ngay
        </Button>
      </Hero>
      <Section title="Vì sao nên chọn Tiếng Đức Đà Nẵng">
        <Reasons />
      </Section>
      <Section title="Cảm nhận học viên" background="texture" overlay>
        <Testimonials />
      </Section>
      <Section title="Các khoá học" background="texture">
        <CourseList />
      </Section>
    </Layout>
  );
};

export default HomePage;
