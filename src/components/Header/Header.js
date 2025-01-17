import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side>
          <MobileNav>
            <Icon id="shopping-bag" color={COLORS.gray[900]} size={24} strokeWidth={2} />
            <Icon id="search" color={COLORS.gray[900]} size={24} strokeWidth={2} />
            <UnstyledButton onClick={() => setShowMobileMenu(true)} >
              <Icon id="menu" color={COLORS.gray[900]} size={24} strokeWidth={2} />
            </UnstyledButton>
          </MobileNav>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  
  @media ${QUERIES.tabletOrSmaller} {
    align-items: center;
    border-top: 4px solid ${COLORS.gray[900]};
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    8vw - 3.75rem,
    3rem
  );
  margin: 0px 48px;

  @media ${QUERIES.tabletOrSmaller} {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;
  line-height: 0;

  @media ${QUERIES.tabletOrSmaller} {
    display: flex;
    gap: 34px;
    justify-content: flex-end;
  }
  @media ${QUERIES.phoneOrSmaller} {
    gap: 20px;
  }
`

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
