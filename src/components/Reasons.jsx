import React, { useContext } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { Animated } from 'react-animated-css';
import { BreakpointsContext } from './BreakpointsProvider';
import { tablet, isSMDown } from '$utils/refactor/media-query';
// import withViewportSize from '$utils/with-viewport-size';

const itemIcons = {
  successStories: '/img/core-img/tiledau.png',
  default: '/img/core-img/docs.png',
  star: '/img/core-img/star.png',
  events: '/img/core-img/events.png',
  courses: '/img/core-img/earth.png',
  limitedStudents: '/img/core-img/sisogioihan.png',
  trialClass: '/img/core-img/hocthu.png',
  extraClass: '/img/core-img/hocphudao.png',
  goodTeachers: '/img/core-img/giangvien.png',
};
const ItemInlineDescription = styled.p`
  margin-bottom: 0;
  font-size: 16px;
  line-height: 22px;
  color: #000;
`;
const ItemDescription = styled(ItemInlineDescription)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  transition-duration: 0.2s;
  opacity: 0;
  visibility: hidden;
  background: url(/img/core-img/texture.png) top left rgba(214, 223, 251, 0.7);
  padding: 20px 50px;
  border-radius: 6px;
`;
const Item = styled.div`
  position: relative;
  z-index: 1;
  border: 1px solid #ebebeb;
  border-radius: 6px;
  text-align: center;
  justify-content: center;
  transition-duration: 0.2;
  margin-bottom: 20px;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  &:hover {
    border-color: #d2d2d2;

    ${ItemDescription} {
      opacity: 1;
      visibility: visible;
    }
  }

  @media screen and ${tablet} {
    height: 300px;
    padding-top: 0;
    padding-bottom: 0;
  }
`;
const ItemIcon = styled.div`
  width: 150px;
  height: 150px;
  background: url(${({ name }) => itemIcons[name] || itemIcons.default}) center no-repeat;
  margin: 0 auto 15px;
  border-radius: 100%;
  border: 3px solid rgba(0, 0, 0, 0.1);
`;
const ItemTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 9px;
  color: rgba(0, 0, 0, 0.8);
  line-height: 2rem;
  font-weight: 700;
`;

const mock = [
  {
    id: shortid.generate(),
    icon: 'goodTeachers',
    title: 'Đội ngũ giảng viên chất lượng',
    description:
      'Đội ngũ giảng viên người Việt và người Đức giàu kinh nghiệm, luôn hiệu quả và tận tâm mang đến những buổi học hiệu quả và thú vị.',
  },
  {
    id: shortid.generate(),
    icon: 'limitedStudents',
    title: 'Sĩ số lớp học giới hạn',
    description:
      'Sĩ số lớp học được giới hạn tối đa 12 học viên, giáo viên có nhiều thời gian hơn để giúp đỡ và tương tác với học viên.',
  },
  {
    id: shortid.generate(),
    icon: 'extraClass',
    title: 'Học phụ đạo miễn phí',
  },
  {
    id: shortid.generate(),
    icon: 'successStories',
    title: 'Cam kết 100% đầu ra cho học viên',
  },
  {
    id: shortid.generate(),
    icon: 'trialClass',
    title: 'Được học thử miễn phí',
  },
  {
    id: shortid.generate(),
    icon: 'successStories',
    title: 'Tỉ lệ đậu cao',
  },
  {
    id: shortid.generate(),
    icon: 'courses',
    title: 'Được bảo lưu khoá học',
  },
  {
    id: shortid.generate(),
    icon: 'default',
    title: 'Hỗ trợ chi phí học lại',
  },
];

function renderItem(item, i, isSmall) {
  const { icon, title, description } = item;
  const delay = (i + 1) * 100;
  return (
    <Animated key={i} animationIn="slideInUp" animationInDelay={delay} isVisible>
      <Item justifyContent="center">
        <ItemIcon name={icon} />
        <ItemTitle>{title}</ItemTitle>
        {description && !isSmall && <ItemDescription>{description}</ItemDescription>}
        {description && isSmall && <ItemInlineDescription>{description}</ItemInlineDescription>}
      </Item>
    </Animated>
  );
}

function Reasons({ data }) {
  const { current } = useContext(BreakpointsContext);
  const isSmall = isSMDown(current);

  return (
    <Container>
      {isSmall}
      <Row>
        {data.map((item, i) => (
          <Col md={6} lg={4} key={item.id}>
            {renderItem(item, i, isSmall)}
          </Col>
        ))}
      </Row>
    </Container>
  );
}

Reasons.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
};
Reasons.defaultProps = {
  data: mock,
};

export default Reasons;
