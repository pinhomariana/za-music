// External libraries
import React from 'react';

// Components
import IconButton from 'components/UI/IconButton';
import { ContentWrapper } from 'components/Layout';
import { Logo, Search } from 'components/UI/Icons/Icons';

// Styled components
import { Wrapper, LogoWrapper } from './Styled';

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
