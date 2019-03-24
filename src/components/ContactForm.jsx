/* eslint-disable react/no-unused-state */
import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { Input, FormGroup, Form, Col, Button, FormFeedback } from 'reactstrap';
const emailReg = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
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
const InputWrap = styled.div`
  flex: 1;
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

  handleSend = e => {
    e.preventDefault();
    const isValid = this.validate();

    if (isValid) {
      const data = {
        name: this.getFieldValue('name'),
        email: this.getFieldValue('email'),
        message: this.getFieldValue('message'),
      };

      console.log(data);

      this.setState({
        loading: true,
      });

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
      } else if (fieldName === 'email' && !emailReg.test(value)) {
        this.setError(fieldName, 'Hãy nhập email đúng định dạng');
      }
    });
    return flag;
  }

  renderInput(type = 'text', fieldName, placeholder) {
    const { loading } = this.state;
    const onChange = this.handleChange(fieldName);
    const value = this.getFieldValue(fieldName);
    const error = this.getFieldError(fieldName);
    const element = createElement(Input, {
      type,
      disabled: loading,
      onChange,
      placeholder,
      value,
      invalid: error !== '',
    });

    return (
      <InputWrap>
        {element}
        {error && <FormFeedback>{error}</FormFeedback>}
      </InputWrap>
    );
  }

  render() {
    const { className } = this.props;

    return (
      <Container className={className}>
        <Heading>Liên lạc</Heading>
        <Form onSubmit={this.handleSend}>
          <FormGroup row>
            <Col>{this.renderInput('text', 'name', 'Họ và tên *')}</Col>
            <Col>{this.renderInput('text', 'email', 'Email *')}</Col>
          </FormGroup>
          <FormGroup row>
            <Col>{this.renderInput('textarea', 'message', 'Nội dung tin nhắn *')}</Col>
          </FormGroup>
          <FormGroup row>
            <Col>
              <Button color="primary">
                Gửi tin nhắn
              </Button>
            </Col>
          </FormGroup>
        </Form>
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
