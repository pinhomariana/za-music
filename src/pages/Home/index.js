import { Hero } from 'components/HomePage';
import React from 'react';
import { ContentWrapper } from './styled';
import Genres from 'components/HomePage/Genres';

function Home() {
  return (
    <ContentWrapper>
      <Hero />
      <Genres />
      <div>Songs table</div>
      <aside>Artist</aside>
    </ContentWrapper>
  );
}

export default Home;
