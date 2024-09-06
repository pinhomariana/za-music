import { Artists, Hero } from 'components/HomePage';
import React, { useEffect, useRef, useState } from 'react';
import { ContentWrapper, SongsTableAndArtistSection } from './styled';
import Genres from 'components/HomePage/Genres';
import { SectionTitle } from 'components/UI/Typography';
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
        <div>Songs table</div>
        <aside>
          <SectionTitle>Top Artists</SectionTitle>
          <Artists isLoading={isLoading} artists={chart?.artists.data}></Artists>
        </aside>
      </SongsTableAndArtistSection>
    </ContentWrapper>
  );
}

export default Home;
