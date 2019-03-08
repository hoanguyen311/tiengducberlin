import React, { useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { Button } from "grommet";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  FormDown,
  FacebookOption,
  MailOption
} from "grommet-icons";
import styled, { css } from "styled-components";
import classNames from 'classnames';
import mediaQuery from "@utils/media-query";

const Container = styled.div`
    position: relative;
`;

const ExpandIcon = styled(FormDown)`
    transition-duration: .2s;
    &.expanded {
        transform: rotate(180deg);
    }

    ${mediaQuery.medium(css`
        &.expanded {
            transform: none;
        }
    `)}
`;

const MainNavContent = styled.div`
    background-color: #fff;
    position: fixed;
    top: 0;
    left: ${props => (props.visible ? 0 : "-310px")};
    z-index: 1000;
    width: 300px;
    height: 100%;
    padding: 0;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    overflow-x: hidden;
    overflow-y: scroll;
    transition-timing-function: ease-out;
    transition-duration: 0.3s;
    display: flex;
    align-items: center;
    flex-direction: column;

    ${mediaQuery.medium(css`
        overflow: visible;
        position: static;
        width: auto;
        box-shadow: none;
        flex-direction: row;
    `)}
`;

const NavCloseIcon = styled(CloseIcon)`
    top: 20px;
    right: 20px;
    z-index: 12;
    position: absolute;
    stroke: #000;
    ${mediaQuery.medium(css`
        display: none;
    `)}
`;
const MenuItemLink = styled(Link)`
    padding: 0 10px;
    color: rgba(0, 0, 0, 0.45);
    display: flex;
    align-items: center;
    line-height: 38px;
    font-size: 14px;
    text-decoration: none;
    transition: color 0.2s linear;
    &:hover {
        color: #000;
    }
`;
const MenuItem = styled.div`
    font-weight: 600;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    position: relative;
    &:last-child {
        border: none;
    }
`;

const Menu = styled.nav`
    width: 100%;
    padding-top: ${props => (props.isSubMenu ? 0 : "70px")};
    background-color: ${props => (props.isSubMenu ? "#FFF" : "#f2f4f8")};
    margin-bottom: 20px;
    ${mediaQuery.large(css`
        flex: 1;
        margin-right: 20px;
        margin-bottom: 0;
    `)}

    &.menu_type_sub ${MenuItem} {
        border-bottom-color: rgba(242, 244, 248, 0.7);
    }

    &.menu_type_sub {
        z-index: 2;
        ${mediaQuery.large(css`
            opacity: 0;
            display: block;
            visibility: hidden;
            position: absolute;
            transition-duration: 0.3s;
            box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
            background: #fff;
            width: 180px;
            top: 80%;
            right: 0;
        `)}
    }

    ${MenuItem}:hover &.menu_type_sub {
        ${mediaQuery.medium(css`
        opacity: 1;
        visibility: visible;
        top: 100%;
        `)}
    }

    ${mediaQuery.medium(css`
        display: flex;
        background: none;
        padding: 0;
    `)}
`;

function renderMenuItem({ to, label, children }) {
    if (!children) {
        return (
            <MenuItem key={to}>
                <MenuItemLink to={to} as={children ? 'div' : null}>
                    {label}
                </MenuItemLink>
            </MenuItem>
        );
    }

    const [ isExpaned, setExpand ] = useState(false);
    const handleClick = () => {
        setExpand(!isExpaned);
    };
    const iconClassName = classNames({
        expanded: isExpaned
    });
    return (
        <MenuItem key={label}>
            <MenuItemLink onClick={handleClick} as={children ? 'div' : null}>
                {label}
                <ExpandIcon className={iconClassName} size="medium" color="#858585" />
            </MenuItemLink>
            {children && isExpaned && (
                <Menu isSubMenu className="menu_type_sub">
                {children.map(renderMenuItem)}
                </Menu>
            )}
        </MenuItem>
    );
}

function MainNav({ menu = {} }) {
    const [visible, setVisible] = useState(false);
    const handleToggleVisible = () => {
        setVisible(!visible);
    };
    const { items } = menu;

    return (
        <Container>
            <MenuIcon
                className="hide-large"
                onClick={handleToggleVisible}
                size="large"
                color="#858585"
            />
            <MainNavContent visible={visible}>
                <NavCloseIcon
                    onClick={handleToggleVisible}
                    size="medium"
                    color="#858585"
                />
                {items && <Menu>{items.map(renderMenuItem)}</Menu>}
                <Button label="Register" primary />
            </MainNavContent>
        </Container>
    );
}

const ItemPropType = PropTypes.shape({
    to: PropTypes.string,
    label: PropTypes.string,
});

MainNav.propTypes = {
    menu: PropTypes.shape({
        items: PropTypes.arrayOf(ItemPropType),
    }),
};

MainNav.defaultProps = {
    menu: {
        items: [
        {
            label: "Home",
            to: "/",
        },
        {
            label: "Courses",
            to: "/course",
            children: [
            {
                label: "A1",
                to: "/course/a1",
            },
            {
                label: "A2",
                to: "/course/a2",
            },
            ],
        },
        {
            label: "Register",
            to: "/register",
        },
        ],
    },
};

export default MainNav;
