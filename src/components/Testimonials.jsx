import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'react-slick';
import shortId from 'shortid';
import { Container } from 'reactstrap';
import { FormNext, FormPrevious } from 'grommet-icons';
import { isSMDown, tablet, MD } from '$utils/refactor/media-query';
import { BreakpointsContext } from './BreakpointsProvider';

// const Container = styled(Row)`
//   background: none;
// `;
const Item = styled.div`
  text-align: center;
`;
const ItemName = styled.h5`
  font-size: 18px;
  margin-bottom: 5px;
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.3;
  font-weight: 700;
`;
const ItemTitle = styled.span`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
  margin-bottom: 20px;
  display: block;
`;
const ItemQuote = styled.p`
  color: #5a5a5a;
  font-size: 14px;
  line-height: 1.8;
  font-weight: 400;
  margin-bottom: 30px;
`;
const ItemContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 20px 30px;
  background-color: #f7f7f7;
  border-radius: 6px;
  transition-duration: 0.3s;
  top: 10px;
  visibility: hidden;
  opacity: 0;
  &:after {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 15px solid #f7f7f7;
    content: '';
    top: -14px;
    left: 49%;
  }
  .slick-active & {
    top: 0px;
    opacity: 1;
    visibility: visible;
  }

  @media screen and ${tablet} {
    .slick-active & {
      top: 10px;
      visibility: hidden;
      opacity: 0;
    }
    .slick-current + .slick-active & {
      top: 0px;
      opacity: 1;
      visibility: visible;
    }
  }
`;
const ItemAvatar = styled.img`
  width: 165px;
  height: 165px;
  background-color: #000;
  margin: 0 auto 40px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
`;

const Arrow = styled.div`
  z-index: 5;
  position: absolute;
  top: 82px;
  transform: translateY(-50%);
  cursor: pointer;
`;
const NextIcon = styled(FormNext)`
  right: 0px;
`;
const PrevIcon = styled(FormPrevious)`
  left: 0;
`;

const SlideArrow = ({ currentSlide, slideCount, ...props }) =>
  React.createElement(Arrow, props, null);

function Testimonials({ items }) {
  const { current } = useContext(BreakpointsContext);
  let slidesToShow = 3;

  switch (true) {
    case isSMDown(current):
      slidesToShow = 1;
      break;
    case current.name === MD:
      slidesToShow = 2;
      break;
    default:
  }

  const renderItem = item => (
    <Item key={shortId.generate()}>
      <ItemAvatar src={item.avatar} alt={item.name} />
      <ItemContent>
        <ItemName>{item.name}</ItemName>
        <ItemTitle>{item.title}</ItemTitle>
        <ItemQuote>{item.content}</ItemQuote>
      </ItemContent>
    </Item>
  );
  if (!items || !items.length) {
    return <div>EMPTY</div>;
  }
  return (
    <Container>
      <Slider
        infinite
        slidesToShow={slidesToShow}
        slidesToScroll={1}
        nextArrow={<SlideArrow as={NextIcon} />}
        prevArrow={<SlideArrow as={PrevIcon} />}
      >
        {items.map(renderItem)}
      </Slider>
    </Container>
  );
}

Testimonials.defaultProps = {
  items: [
    {
      name: 'Thái Hoà',
      avatar: '/img/custom/hoa.jpeg',
      title: 'Học viên lớp Skype',
      content: 'Mình rất bận rộn nhưng nên đã học lớp Skype, kết quả đạt được rất khả quan.',
    },
    {
      name: 'Minh Thư',
      avatar: '/img/custom/thu.jpg',
      title: 'Học viên lớp B1',
      content:
        'Lựa chọn học tại trung tâm là quyết định đúng đắn của em. Em đã lấy được bằng B1 sau 7 tháng học tại đây.',
    },
    {
      name: 'Đăng Triêm',
      avatar: '/img/custom/triem.jpg',
      title: 'Học viên lớp B1',
      content:
        'Cảm ơn quý thầy cô tại trung tâm đã nhiệt tình giúp đỡ và dạy dỗ em hoàn thành tốt khoá B1',
    },
    {
      name: 'Bác Đoàn',
      avatar: '/img/custom/bac-minh.jpg',
      title: 'Học viên lớp A1',
      content: 'Tôi đã học hết khoá A1 ở trung tâm và cảm thấy rất hài lòng.',
    },
  ],
};

Testimonials.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};

export default Testimonials;
