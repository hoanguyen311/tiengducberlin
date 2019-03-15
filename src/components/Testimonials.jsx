import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Slider from 'react-slick';
import { Image, Box } from 'grommet';
import { FormNext, FormPrevious } from 'grommet-icons';
import shortId from 'shortid';
import withViewportSize from '$utils/with-viewport-size';
import media from '$utils/media-query';

const Container = styled(Box)`
  background: none;
`;
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

  ${media.medium(css`
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
  `)}
`;
const ItemAvatar = styled(Image)`
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

const TestimonialsItem = ({ name, title, content, avatar }) => (
  <Item>
    <ItemAvatar src={avatar} alt={name} />
    <ItemContent>
      <ItemName>{name}</ItemName>
      <ItemTitle>{title}</ItemTitle>
      <ItemQuote>{content}</ItemQuote>
    </ItemContent>
  </Item>
);

function Testimonials({ items, viewport }) {
  const slidesToShow = viewport === 'small' ? 1 : 3;
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
        {items.map(item => (
          <TestimonialsItem {...item} key={shortId.generate()} />
        ))}
      </Slider>
    </Container>
  );
}

Testimonials.defaultProps = {
  viewport: 'small',
  items: [
    {
      name: 'Hoa',
      avatar: '/img/bg-img/t2.png',
      title: 'Học viên lớp A1',
      content: 'Tôi già rồi nhưng vẫn thích học ở đây',
    },
    {
      name: 'Hoa',
      avatar: '/img/bg-img/t1.png',
      title: 'Học viên lớp A1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum laoreet elit, sit amet tincidunt mauris ultrices vitae.',
    },
    {
      name: 'Hoa',
      avatar: '/img/bg-img/t3.png',
      title: 'Học viên lớp A1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum laoreet elit, sit amet tincidunt mauris ultrices vitae.',
    },
    {
      name: 'Hoa',
      avatar: '/img/bg-img/t4.png',
      title: 'Học viên lớp A1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum laoreet elit, sit amet tincidunt mauris ultrices vitae.',
    },
    {
      name: 'Hoa',
      avatar: '/img/bg-img/t2.png',
      title: 'Học viên lớp A1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum laoreet elit, sit amet tincidunt mauris ultrices vitae.',
    },
    {
      name: 'Hoa',
      avatar: '/img/bg-img/t2.png',
      title: 'Học viên lớp A1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum laoreet elit, sit amet tincidunt mauris ultrices vitae.',
    },
  ],
};

Testimonials.propTypes = {
  viewport: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};

export default withViewportSize(Testimonials);
