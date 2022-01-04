/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper>
      <Content>
        <UnstyledButton onClick={onDismiss}>
          <Icon id="close" color={COLORS.gray[900]} size={24} strokeWidth={2} />
        </UnstyledButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: hsla(0deg 0% 0% / 0.2);
  display: flex;
  justify-content: flex-end;
`;
const Content = styled(DialogContent)`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 32px;
  min-width: 300px;
`;
const Nav = styled.nav`
  align-self: flex-start;
`;
const NavLink = styled.a`
  color: ${COLORS.gray[900]};
  display: block;
  font-size: ${18 / 16}rem;
  font-weight: 600;
  padding-top: 22px;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;
const Footer = styled.footer`
  align-self: flex-start;
  & > a {
    color: ${COLORS.gray[700]};
    display: block;
    font-size: ${14/16}rem;
    margin-top: 14px;
    text-decoration: none;
  }
`;
export default MobileMenu;
