/* eslint-disable react/no-unused-state */
import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import { TextInput, TextArea, Button } from 'grommet';
import styled, { css } from 'styled-components';
import classNames from 'classnames';
import media from '$utils/media-query';

const Container = styled.div`
  position: relative;
  z-index: 1;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.15);
  padding: 35px 50px;
  border-radius: 6px;
  background-color: #ffffff;
`;
const Heading = styled.h3`
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.3;
  font-weight: 700;
  margin-bottom: 20px;
  margin-top: 0;
  font-size: 24px;
`;
const FormRow = styled.div`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  ${media.medium(css`
    display: flex;
    justify-content: space-between;
  `)}
`;
const FormCol = styled.div`
  margin-bottom: 20px;
  ${media.medium(css`
    width: 48%;
    margin-bottom: 0;
  `)}
`;
const InputWrap = styled.div`
  flex: 1;
`;
const Input = styled(TextInput)`
  &.error {
    border-color: red;
  }
`;
const MessageInput = styled(TextArea)`
  &.error {
    border-color: red;
  }
`;
const SendButton = styled(Button)`
  flex: 1;
`;
const Error = styled.span`
  font-size: 14px;
  line-height: 16px;
  color: red;
`;

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      name: {
        value: '',
        error: '',
      },
      email: {
        value: '',
        error: '',
      },
      message: {
        value: '',
        error: '',
      },
    };
  }

  getFieldValue(fieldName) {
    const { [fieldName]: state } = this.state;
    return state.value;
  }

  getFieldError(fieldName) {
    const { [fieldName]: state } = this.state;
    return state.error;
  }

  handleChange = fieldName => {
    return e => {
      const { value } = e.target;

      this.setState({
        [fieldName]: {
          error: '',
          value,
        },
      });
    };
  };

  setError = (fieldName, error) => {
    const value = this.getFieldValue(fieldName);

    this.setState({
      [fieldName]: {
        error,
        value,
      },
    });
  };

  handleSend = () => {
    const isValid = this.validate();

    if (isValid) {
      this.setState({
        loading: true,
      });
      alert('send to server');
      this.setState({
        loading: false,
      });
    }
  };

  validate() {
    let flag = true;
    ['message', 'email', 'name'].forEach(fieldName => {
      const value = this.getFieldValue(fieldName);
      if (!value || value === '') {
        flag = false;
        this.setError(fieldName, 'Bạn không được để trống ô này');
      }
    });
    return flag;
  }

  renderInput(type = Input, fieldName, placeholder) {
    const { loading } = this.state;
    const onChange = this.handleChange(fieldName);
    const value = this.getFieldValue(fieldName);
    const error = this.getFieldError(fieldName);
    const element = createElement(type, {
      disabled: loading,
      onChange,
      placeholder,
      value,
      className: classNames({
        error: error !== '',
      }),
    });

    return (
      <InputWrap>
        {element}
        {error && <Error>{error}</Error>}
      </InputWrap>
    );
  }

  render() {
    const { className } = this.props;

    return (
      <Container className={className}>
        <Heading>Liên lạc</Heading>
        <FormRow>
          <FormCol>{this.renderInput(Input, 'name', 'Họ và tên *')}</FormCol>
          <FormCol>{this.renderInput(Input, 'email', 'Email *')}</FormCol>
        </FormRow>
        <FormRow>{this.renderInput(MessageInput, 'message', 'Nội dung tin nhắn *')}</FormRow>
        <FormRow>
          <SendButton onClick={this.handleSend} label="Gửi tin nhắn" primary />
        </FormRow>
      </Container>
    );
  }
}

ContactForm.propTypes = {
  className: PropTypes.string,
};

ContactForm.defaultProps = {
  className: '',
};

export default ContactForm;
