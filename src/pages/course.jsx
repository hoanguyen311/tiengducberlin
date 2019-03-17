/* eslint-disable import/no-webpack-loader-syntax */

import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import SEO from '$components/SEO';
import Hero from '$components/Hero';
import Layout from '$components/Layout';
import Section from '$components/Section';
import mediaQuery from '$utils/media-query';
import mockContent from 'raw-loader!$root/mock/course-content.html';
import mockInfo from 'raw-loader!$root/mock/course-info.html';

const CourseIntro = styled.main`
  height: auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 6px;
  width: 100%;

  ${mediaQuery.medium(css`
    width: auto;
  `)}
`;
const CourseTitle = styled.h3`
  color: rgba(0, 0, 0, 0.8);
  font-size: 40px;
  margin-bottom: 20px;
  font-weight: 700;
  line-height: 50px;
`;
const CourseDescription = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.8);
  letter-spacing: 0.75px;
`;
const Content = styled.main``;

const Course = ({ name, description, banner, info, content }) => (
  <Layout>
    <SEO title="Course" />
    <Hero image={banner}>
      <CourseIntro>
        <CourseTitle>{name}</CourseTitle>
        <CourseDescription>{description}</CourseDescription>
      </CourseIntro>
    </Hero>
    <Section title="Thông tin khoá học">
      <Content dangerouslySetInnerHTML={{ __html: info }} />
    </Section>
    <Section title="Nội dung khoá học" background="texture">
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </Section>
  </Layout>
);

Course.defaultProps = {
  name: 'Trình độ A1',
  description: 'Trình độ bắt buộc đối với công dân nước ngoài muốn sang Đức định cư, du lịch.',
  banner: '/img/bg-img/e2.jpg',
  info: mockInfo,
  content: mockContent,
};

Course.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  banner: PropTypes.string,
  info: PropTypes.string,
  content: PropTypes.string,
};

export default Course;
