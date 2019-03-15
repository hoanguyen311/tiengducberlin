import React from 'react';
import styled from 'styled-components';
import packageJson from '$root/package.json';
import { Content as SectionContent } from './Section';
import ContactNav from './ContactNav';

const Container = styled.footer`
  background-color: #252525;
`;
const Content = styled(SectionContent)`
  position: relative;
  z-index: 1;
  padding: 40px 0;
  text-align: center;
`;
const FooterLogo = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 5px;
`;
const CopyWrite = styled.div``;
const CopyWriteItem = styled.p`
  color: rgba(255, 255, 255, 0.2);
  font-size: 12px;
  line-height: 16px;
  margin: 0 0 5px 0;
`;
const BottomContent = styled.div`
  border-top: 1px solid #4c4c4c;
`;

const Footer = () => {
  const year = new Date().getFullYear();
  const copyRight = `Copyright © ${year} All rights reserved`;
  return (
    <Container>
      <Content>
        <FooterLogo>TIẾNG ĐỨC BERLIN</FooterLogo>
        <CopyWrite>
          <CopyWriteItem>{copyRight}</CopyWriteItem>
          <CopyWriteItem>
            This website is made with
            <span role="img" aria-label="heart">
              ❤ ️
            </span>
            by
            {packageJson.author}
          </CopyWriteItem>
        </CopyWrite>
      </Content>
      <BottomContent>
        <ContactNav theme="dark" />
      </BottomContent>
    </Container>
  );
};

export default Footer;
