import React from 'react';
import { Logo, Search } from 'components/UI/Icons/Icons';
import { Wrapper, LogoWrapper } from './Styled';
import IconButton from 'components/UI/IconButton';
import { ContentWrapper } from 'components/Layout';

function Header() {
  return (
    <Wrapper>
      <ContentWrapper display="flex" items="center" content="space-between">
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <IconButton width={58} height={58} withBackground>
          <Search />
        </IconButton>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Header;
