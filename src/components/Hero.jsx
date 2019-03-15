import React from 'react';
import styled from 'styled-components';
import { Button, Box } from 'grommet';

const Container = styled.div`
  width: 100%;
  min-height: 400px;
  position: relative;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: ${props => `url(${props.backgroundImage})`};
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const Content = styled(Box)`
  text-align: center;
  position: relative;
  z-index: 3;
  display: inline-block;
  padding: 0 10%;
`;
const Text = styled.h2`
  font-size: 40px;
  margin-bottom: 30px;
  font-weight: 700;
  color: #ffffff;
  line-height: 50px;
`;
const ActionButton = styled(Button)``;

export default function() {
  return (
    <Container backgroundImage="/img/bg-img/bg1.jpg">
      <Content animation="zoomIn">
        <Text>
          Khai giảng các lớp tiếng Đức
          <br />
          trình độ A1, A2, B1
        </Text>
        <ActionButton primary size="large" label="Đăng Ký Ngay" />
      </Content>
    </Container>
  );
}
