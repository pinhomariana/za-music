import { Hero } from 'components/HomePage';
import React from 'react';
import { ContentWrapper, SongsTableAndArtistSection } from './styled';
import Genres from 'components/HomePage/Genres';

function Home() {
  return (
    <ContentWrapper>
      <Hero />
      <Genres />
      <SongsTableAndArtistSection>
        <div>Songs table</div>
        <aside>Artist</aside>
      </SongsTableAndArtistSection>
    </ContentWrapper>
  );
}

export default Home;
