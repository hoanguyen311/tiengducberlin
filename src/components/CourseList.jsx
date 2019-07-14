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
  daysInWeek,
}) => {
  return (
    <Item id={id} to={`/course/${id}`}>
      <ItemBanner src={banner} alt={title} />
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
        {level && <ItemMetadata>Trình độ: {level}</ItemMetadata>}
        {startDate && <ItemMetadata>Khai giảng: {startDate}</ItemMetadata>}
        <ItemDescription>{description}</ItemDescription>
      </ItemContent>
      {!durationInWeek && !daysInWeek && !price ? null : (
        <ItemFooter>
          <FooterItem>Thời gian: {`${durationInWeek} tuần`}</FooterItem>
          {daysInWeek && <FooterItem>{daysInWeek} buổi/tuần</FooterItem>}
          {price && <ItemPrice>{price}</ItemPrice>}
        </ItemFooter>
      )}
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
      banner: '/img/bg-img/e1.jpg',
      level: 'A1',
      title: 'Lớp A1',
      id: shortid.generate(),
      description:
        'Trình độ bắt buộc đối với công dân nước ngoài muốn sang Đức với mục đích kết hôn, định cư, du lịch.',
      durationInWeek: 8,
      daysInWeek: 5,
    },
    {
      banner: '/img/bg-img/e2.jpg',
      level: 'A2',
      title: 'Lớp A2',
      id: shortid.generate(),
      description:
        'Trình độ A2 này cần thiết và là bước nền tảng vô cùng quan trọng để Học viên có thể học lên trình độ B1. ',
      durationInWeek: 8,
      daysInWeek: 5,
    },
    {
      banner: '/img/bg-img/default.jpeg',
      level: 'B1',
      title: 'Lớp B1',
      id: shortid.generate(),
      description:
        'Hiểu những gì bạn nghe thấy trong các tình huống hàng ngày như: Các câu hỏi đơn giản, thông báo công cộng, các cuộc trò chuyện ngắn.',
      durationInWeek: 10,
      daysInWeek: 5,
    },
    {
      banner: '/img/bg-img/e3.jpg',
      level: 'B2',
      title: 'Lớp B2',
      id: shortid.generate(),
      description:
        'Trình độ này nhằm mục đích rèn luyện các kĩ năng cho các kì thi TestDaF hay DHS, hiện tại các trường ở Đức yêu cầu phải có bằng B2 ',
      durationInWeek: 10,
      daysInWeek: 5,
    },
    {
      banner: '/img/bg-img/e1.jpg',
      title: 'Lớp Luyện Thi',
      id: shortid.generate(),
      description: `
      Trung tâm thường xuyên tổ chức các lớp luyện thi A1, A2, B1, B2. Lớp luyện thi giúp học viên nắm rõ hơn cấu trúc đề thi và các mẹo để làm tốt bài thi. Đồng thời, giáo viên sẽ ôn lại kiến thức cũ và củng cố các kiến thức khó, dễ nhầm lẫn. Học viên ôn luyện qua các đề thi TestDaF hay DSH chính thức các năm trước.
      `,
      durationInWeek: 8,
      daysInWeek: 5,
    },
    {
      banner: '/img/bg-img/e2.jpg',
      title: 'Giao tiếp - Du lịch',
      id: shortid.generate(),
      description: `
      Không tập trung nhiều vào ngữ pháp, khóa học chủ yếu cung cấp các tình huống giao tiếp thực tế cần thiết như: tại sân bay, khách sạn, gọi đồ ăn trong nhà hàng, đi mua sắm hay các mẫu câu trong trường hợp khẩn cấp,…
      `,
      durationInWeek: 8,
      daysInWeek: 5,
    },
    {
      banner: '/img/bg-img/e3.jpg',
      title: 'Học 1 kèm 1',
      id: shortid.generate(),
      description: `
      Chương trình dành cho các bạn muốn học theo hình thức dạy kèm 1 người. Thời gian linh hoạt, phương pháp dạy và học hiệu quả, học viên và giáo viên dễ dàng tương tác, điều chỉnh lượng kiến thức theo tốc độ tiếp thu của người học.
      `,
      durationInWeek: 8,
      daysInWeek: 5,
    },
    {
      banner: '/img/bg-img/default.jpeg',
      title: 'Học qua Skype',
      id: shortid.generate(),
      description: `
      Chương trình dành cho các bạn bận rộn công việc, không có thời gian để sắp xếp học tại trường. Thời gian linh hoạt, phương pháp dạy và học hiệu quả, học viên và giáo viên dễ dàng tương tác, điều chỉnh lượng kiến thức theo tốc độ tiếp thu của người học.
      `,
      durationInWeek: 8,
      daysInWeek: 5,
    },
  ],
};

CourseItem.defaultProps = {
  banner: '/img/bg-img/default.jpeg',
  level: null,
  title: 'Lớp A4',
  id: shortid.generate(),
  description: 'Exercitation tempor et velit ex minim aliqua occaecat ullamco.',
  durationInWeek: 3,
  startDate: null,
  daysInWeek: null,
  price: null,
};

CourseItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  banner: PropTypes.string,
  level: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  daysInWeek: PropTypes.number,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  durationInWeek: PropTypes.number,
  startDate: PropTypes.string,
};

CourseList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(CourseItem.propTypes)),
};

export default CourseList;
