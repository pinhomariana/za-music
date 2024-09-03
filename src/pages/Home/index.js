import { Hero } from 'components/HomePage';
import React from 'react';
import { ContentWrapper } from './styled';

function Home() {
  return (
    <ContentWrapper>
      <Hero />
      <div>Genres</div>
      <div>Songs table</div>
      <aside>Artist</aside>
    </ContentWrapper>
  );
}

export default Home;
