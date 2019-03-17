import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import addScript from '$utils/add-script';

const CustomerChat = styled.div`
  /* position: fixed; */
  z-index: 10;
  bottom: 40px;
  right: 30px;
  a:hover {
    text-decoration: none !important;
  }
`;

class FBPlugins extends Component {
  static defaultProps = {
    appId: '588288398358257',
    pageId: '164913087299485',
  };

  static propTypes = {
    appId: PropTypes.string,
    pageId: PropTypes.string,
  };

  componentDidMount() {
    this.initSdk();
  }

  initSdk() {
    const { appId } = this.props;
    // eslint-disable-next-line no-undef
    window.fbAsyncInit = () => {
      // eslint-disable-next-line no-undef
      FB.init({
        appId,
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.2',
      });
    };
    addScript('https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js', 'facebook-jssdk');
  }

  render() {
    const { pageId } = this.props;
    return (
      <>
        <CustomerChat>
          <div
            className="fb-customerchat"
            attribution="setup_tool"
            page_id={pageId}
            theme_color="#3762f0"
            logged_in_greeting="Hi! Bạn cần tư vấn gì về khoá học?"
            logged_out_greeting="Hi! Bạn cần tư vấn gì về khoá học?"
          />
        </CustomerChat>
      </>
    );
  }
}

export default FBPlugins;
