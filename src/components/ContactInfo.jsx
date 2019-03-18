import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FacebookOption, MailOption, Location, Phone } from 'grommet-icons';

const Container = styled.div`
  position: relative;
  z-index: 1;
  padding: 35px 30px;
  border: 1px solid #ebebeb;
  border-radius: 6px;
`;
const Heading = styled.h3`
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.3;
  font-weight: 700;
  margin-bottom: 20px;
  margin-top: 0;
  font-size: 24px;
`;
const Item = styled.div`
  display: flex;
  margin-bottom: 5px;
`;
const Icon = styled.i`
  margin-right: 7px;
  fill: rgba(0, 0, 0, 0.3);
  stroke: rgba(0, 0, 0, 0.3);
`;
const ItemLabel = styled.span`
  display: flex;
  align-items: center;
  line-height: 1.3;
  font-weight: 700;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.3);
  flex-wrap: wrap;
`;
const ItemValue = styled(ItemLabel)`
  stroke: rgba(0, 0, 0, 0.3);
`;

const icons = {
  facebook: FacebookOption,
  mail: MailOption,
  address: Location,
  phone: Phone,
};

const ContactInfoItem = ({ icon, children }) => {
  const ItemIcon = icons[icon];

  return (
    <Item>
      <ItemLabel>
        <Icon size="small" as={ItemIcon} />
      </ItemLabel>
      <ItemValue>{children}</ItemValue>
    </Item>
  );
};

ContactInfoItem.defaultProps = {
  icon: 'facebook',
  children: null,
};
ContactInfoItem.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)),
  children: PropTypes.node,
};

const ContactInfo = ({ number, email, address, className }) => {
  return (
    <Container className={className}>
      <Heading> Tiếng Đức Berlin </Heading>
      <ContactInfoItem icon="address" label="Địa chỉ">
        {address}
      </ContactInfoItem>
      <ContactInfoItem icon="phone" label="Số điện thoại">
        {number}
      </ContactInfoItem>
      <ContactInfoItem icon="mail" label="Email">
        {email}
      </ContactInfoItem>
    </Container>
  );
};

ContactInfo.propTypes = {
  number: PropTypes.string,
  className: PropTypes.string,
  address: PropTypes.string,
  email: PropTypes.string,
};

ContactInfo.defaultProps = {
  number: '0707920309 - 0842898619',
  className: '',
  address: '31 Hoà Bình, Phương Khuê Trung, Quận Cẩm Lệ, TP. Đà Nẵng',
  email: 'tiengducberlin@gmail.com',
};

export default ContactInfo;
