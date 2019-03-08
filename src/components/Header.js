import PropTypes from "prop-types";
import React, { Component } from "react";
import MainNav from '@components/MainNav';
import styled, { css } from 'styled-components';
import classNames from 'classnames';
import media, { VisibleMediumUp } from '@utils/media-query';

const Header = styled.header`
    height: 80px;
    display: flex;
    padding: .5em 2em;
    align-items: center;
    justify-content: space-between;
    background: #FFF;
    z-index: 10;
    ${media.large(css`
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    `)}

    &.header_stucked {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
`;

const LogoImage = styled.img`
    margin: 0 8px 0 0;
    width: 40px;
    height: 40px;
`;

export default class extends Component {
    static propTypes = {
        siteTitle: PropTypes.string,
        siteLogo: PropTypes.string,
        isSticky: PropTypes.bool,
    };
    
    static defaultProps = {
        isSticky: false,
        siteTitle: ``,
        siteLogo: 'img/logo.jpg'
    };

    render() {
        const { siteTitle, siteLogo, isSticky } = this.props;
        const className = classNames({
            'header_stucked': isSticky
        });
        return (
            <Header className={className}>
                <Logo>
                    <LogoImage alt={siteTitle} src={siteLogo} />
                </Logo>
                <MainNav />
            </Header>
        );
    }
}