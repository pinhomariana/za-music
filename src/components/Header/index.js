import React from 'react';
import styled from 'styled-components';
import { Logo, Search } from 'components/UI/Icons/Icons';
import { Wrapper, LogoWrapper } from './Styled';
import IconButton from 'components/UI/IconButton';

function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <IconButton width={58} height={58} withBackground>
        <Search />
      </IconButton>
    </Wrapper>
  );
}

export default Header;
