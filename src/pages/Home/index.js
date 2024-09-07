import { Artists, Hero } from 'components/HomePage';
import React, { useEffect, useRef, useState } from 'react';
import { ContentWrapper, Greytitle, SongsTableAndArtistSection, AsydeStyled } from './styled';
import Genres from 'components/HomePage/Genres';
import { SectionSubtitle, SectionTitle } from 'components/UI/Typography';
import axios from 'axios';

import 'react-loading-skeleton/dist/skeleton.css';
import 'swiper/css';
import 'swiper/css/pagination';

function Home() {
  const [chart, setChart] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    const loadData = async () => {
      const response = await axios.get('/chart');
      setChart(response.data);
      setIsLoading(false);
    };
    loadData();
  }, []);
  return (
    <ContentWrapper>
      <Hero />
      <Genres />

      <SongsTableAndArtistSection>
        <div>
          <Greytitle>Global</Greytitle>
          <SectionTitle>Tranding right now</SectionTitle>
        </div>
        <AsydeStyled>
          <Greytitle>Global</Greytitle>
          <SectionTitle>Top Artists</SectionTitle>
          <Artists isLoading={isLoading} artists={chart?.artists.data}></Artists>
        </AsydeStyled>
      </SongsTableAndArtistSection>
    </ContentWrapper>
  );
}

export default Home;
