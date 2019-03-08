import React from "react"
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
`;

const Content = styled.div`
  text-align: center;
`;
const Logo = styled.img`
  width: 150px;
  height: 150px;
`;
const Notice = styled.main`
`;
const NoticeIcon = styled.i``;
const NoticeText = styled.span`
  font-size: 16px;
  line-height: 20px;
  color: #666;
`;
const FacebookLink = styled.a`
  display: inline-block;
  margin-left: 5px;
  color: #000;
  text-decoration: none;
`;

const UnderConstruction = () => (
  <Container>
    <Content>
      <FacebookLink href="https://www.facebook.com/yourchoiceistrue/" title="Facebook">
        <Logo src="img/logo.jpg" />
      </FacebookLink>
      <Notice>
        <NoticeIcon />
        <NoticeText>
          Website đang được xây dựng. <br /> Vui lòng xem thông tin qua
          <FacebookLink href="https://www.facebook.com/yourchoiceistrue/" title="Facebook"> 
            Facebook
          </FacebookLink>
        </NoticeText>
      </Notice>
    </Content>
  </Container>
);

export default UnderConstruction
