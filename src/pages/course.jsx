import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Layout from '$components/Layout';
import SEO from '$components/SEO';
import Hero from '$components/Hero';
import Section from '$components/Section';
import CourseInfo from '$components/CourseInfo';
import SidebarWidget from '$components/SidebarWidget';
import mediaQuery from '$utils/media-query';

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
  margin-bottom: 30px;
  font-weight: 700;
  line-height: 50px;
`;
const CoursePrice = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  color: #3762f0;
  letter-spacing: 0.75px;
  font-weight: 700;
`;
const Content = styled.main``;
const Sidebar = styled.aside`
  border-bottom: 1px solid #ebebeb;
`;

const Course = ({ name, price, banner }) => (
  <Layout>
    <SEO title="Course" />
    <Hero image={banner}>
      <CourseIntro>
        <CourseTitle>{name}</CourseTitle>
        <CoursePrice>{price}</CoursePrice>
      </CourseIntro>
    </Hero>
    <Section>
      <Sidebar>
        <SidebarWidget title="Thông tin khoá học">
          <CourseInfo />
        </SidebarWidget>
      </Sidebar>
      <Content>
        [main]
      </Content>
    </Section>
  </Layout>
);

Course.defaultProps = {
  name: 'Lớp A1 nâng cao',
  price: '15.000.000 đ',
  banner: '/img/bg-img/e2.jpg',
};

Course.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  banner: PropTypes.string,
};

export default Course;
