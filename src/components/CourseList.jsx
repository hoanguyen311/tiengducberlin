import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import shortid from 'shortid';

// const Container = styled.div``;
const Item = styled(Link)`
  position: relative;
  z-index: 1;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  background-color: #ffffff;
  margin-bottom: 100px;
  text-decoration: none;
  display: block;
  overflow: hidden;
  &:hover {
    text-decoration: none;
  }
`;
const ItemContent = styled.main`
  padding: 25px;
`;
const ItemTitle = styled.h4`
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.3;
  font-weight: 700;
  margin-bottom: 5px;
`;
const ItemBanner = styled.img`
  display: block;
  width: 100%;
  border-radius: 6px 6px 0 0;
`;
const ItemMetadata = styled.time`
  color: rgba(0, 0, 0, 0.4);
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  margin-right: 10px;
`;
const ItemDescription = styled.p`
  color: #5a5a5a;
  font-size: 14px;
  line-height: 1.8;
`;
const ItemFooter = styled.footer`
  width: 100%;
  height: 40px;
  background-color: #f7f7f7;
  border-radius: 0 0 6px 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FooterItem = styled.span`
  padding: 0 20px;
  display: flex;
  height: 100%;
  align-items: center;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.3);
`;
const ItemPrice = styled(FooterItem)`
  border: none;
  color: #fff;
  background-color: #3762f0;
  text-transform: uppercase;
`;

const CourseItem = ({
  level,
  id,
  title,
  price,
  banner,
  startDate,
  description,
  durationInWeek,
}) => {
  return (
    <Item id={id} to={`/course/${id}`}>
      <ItemBanner src={banner} alt={title} />
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
        <ItemMetadata>Trình độ: {level}</ItemMetadata>
        <ItemMetadata>Khai giảng: {startDate}</ItemMetadata>
        <ItemDescription>{description}</ItemDescription>
      </ItemContent>
      <ItemFooter>
        <FooterItem>Thời gian(tuần): {durationInWeek}</FooterItem>
        <ItemPrice>{price}</ItemPrice>
      </ItemFooter>
    </Item>
  );
};

const CourseList = ({ items }) => {
  const renderItem = item => (
    <Col key={item.id} md={4} lg={4}>
      <CourseItem {...item} />
    </Col>
  );
  return (
    <Container>
      <Row> {items.map(renderItem)} </Row>
    </Container>
  );
};

CourseList.defaultProps = {
  items: [
    {
      banner: '/img/bg-img/default.jpeg',
      level: 'A1',
      title: 'Lớp A1',
      id: shortid.generate(),
      description:
        'Exercitation tempor et velit ex minim aliqua occaecat ullamco. Adipisicing cupidatat id id et ad qui mollit occaecat reprehenderit ea anim cillum occaecat adipisicing.',
      price: '15.000.000 vnđ',
      durationInWeek: 3,
      startDate: '10-10-2019',
    },
    {
      banner: '/img/bg-img/default.jpeg',
      level: 'A1',
      title: 'Lớp A2',
      id: shortid.generate(),
      description: 'Exercitation tempor et velit ex minim aliqua occaecat ullamco.',
      price: '15.000.000 vnđ',
      durationInWeek: 3,
      startDate: '10-10-2019',
    },
    {
      banner: '/img/bg-img/default.jpeg',
      level: 'A1',
      title: 'Lớp A3',
      id: shortid.generate(),
      description: 'Exercitation tempor et velit ex minim aliqua occaecat ullamco.',
      price: '15.000.000 vnđ',
      durationInWeek: 3,
      startDate: '10-10-2019',
    },
    {
      banner: '/img/bg-img/default.jpeg',
      level: 'A1',
      title: 'Lớp A4',
      id: shortid.generate(),
      description: 'Exercitation tempor et velit ex minim aliqua occaecat ullamco.',
      price: '15.000.000 vnđ',
      durationInWeek: 3,
      startDate: '10-10-2019',
    },
    {
      banner: '/img/bg-img/default.jpeg',
      level: 'A1',
      title: 'Lớp A4',
      id: shortid.generate(),
      description: 'Exercitation tempor et velit ex minim aliqua occaecat ullamco.',
      price: '15.000.000 vnđ',
      durationInWeek: 3,
      startDate: '10-10-2019',
    },
  ],
};

CourseItem.defaultProps = {
  banner: '/img/bg-img/default.jpeg',
  level: 'A1',
  title: 'Lớp A4',
  id: shortid.generate(),
  description: 'Exercitation tempor et velit ex minim aliqua occaecat ullamco.',
  price: '15.000.000 vnđ',
  durationInWeek: 3,
  startDate: '10-10-2019',
};

CourseItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  banner: PropTypes.string,
  level: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  durationInWeek: PropTypes.number,
  startDate: PropTypes.string,
};

CourseList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(CourseItem.propTypes)),
};

export default CourseList;
