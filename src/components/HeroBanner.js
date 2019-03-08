import React from 'react';
import styled, { css } from "styled-components";
import { Link } from "gatsby";
// import {
//   FacebookOption,
//   MailOption,
//   Phone
// } from "grommet-icons";
import mediaQuery from "@utils/media-query";

const Container = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: ${(props) => `url(${props.backgroundImage})`};
`;

const Content = styled.div`
`;
const Text = styled.h3`
`;
const Button = styled.button`
`;

export default function() {
  return (
    <Container backgroundImage="img/bg-img/bg1.jpg">
      <Content>
        <Text>
          Let's Study Together
        </Text>
        <Button>
          GET STARTED
        </Button>
      </Content>
    </Container>
  )
};