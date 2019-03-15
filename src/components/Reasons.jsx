import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import shortid from 'shortid';
import withViewportSize from '$utils/with-viewport-size';
import { Animated } from 'react-animated-css';
import { Grid, Box } from 'grommet';

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
  border: 1px solid #000;
  border-radius: 6px;
`;
const Item = styled(Box)`
  position: relative;
  z-index: 1;
  padding-left: 50px;
  padding-right: 50px;
  border: 1px solid #ebebeb;
  border-radius: 6px;
  text-align: center;
  justify-content: center;
  transition-duration: 0.2;
  height: 300px;
  &:hover {
    border-color: #d2d2d2;

    ${ItemDescription} {
      opacity: 1;
      visibility: visible;
    }
  }
`;
const ItemIcon = styled.div`
  width: 75px;
  height: 75px;
  background: url(${({ name }) => itemIcons[name] || itemIcons.default}) center no-repeat;
  margin: 0 auto 15px;
`;
const ItemTitle = styled.h4`
  font-size: 20px;
  margin-bottom: 9px;
  color: #3762f0;
  line-height: 25px;
  font-weight: bold;
  text-transform: uppercase;
`;

const Container = styled(Grid)`
  background: none;
`;

const data = [
  {
    icon: 'goodTeachers',
    title: 'Đội ngũ giảng viên chất lượng',
    description:
      'Đội ngũ giảng viên người Việt và người Đức giàu kinh nghiệm, luôn hiệu quả và tận tâm mang đến những buổi học hiệu quả và thú vị.',
  },
  {
    icon: 'limitedStudents',
    title: 'Sĩ số lớp học giới hạn',
    description:
      'Sĩ số lớp học được giới hạn tối đa 12 học viên, giáo viên có nhiều thời gian hơn để giúp đỡ và tương tác với học viên.',
  },
  {
    icon: 'extraClass',
    title: 'Học phụ đạo miễn phí',
  },
  {
    icon: 'successStories',
    title: 'Cam kết 100% đầu ra cho học viên',
  },
  {
    icon: 'trialClass',
    title: 'Được học thử miễn phí',
  },
];

function renderItem(item, i, viewport) {
  const { icon, title, description } = item;
  const delay = (i + 1) * 100;
  const isSmall = viewport === 'small';
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

function Reasons({ viewportSize }) {
  let columnsCount;
  const columnsSize = 'small';

  switch (viewportSize) {
    case 'medium':
      columnsCount = 3;
      break;
    case 'large':
      columnsCount = 3;
      break;
    default:
      columnsCount = 1;
  }
  const columns = {
    count: columnsCount,
    size: columnsSize,
  };

  return (
    <Container>
      <Grid
        alignContent="center"
        justifyContent="center"
        backgroundImage="img/bg-img/bg1.jpg"
        columns={columns}
        row={['1fr']}
        gap={{ row: 'small', column: 'small' }}
      >
        {data.map((item, i) => renderItem(item, i, viewportSize))}
      </Grid>
    </Container>
  );
}

Reasons.propTypes = {
  viewportSize: PropTypes.string.isRequired,
};

export default withViewportSize(Reasons);
