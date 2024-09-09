import { Artists, Hero } from 'components/HomePage';
import React, { useEffect, useRef, useState } from 'react';
import { Greytitle, SongsTableAndArtistSection, AsydeStyled } from './styled';
import Genres from 'components/HomePage/Genres';
import { SectionSubtitle, SectionTitle } from 'components/UI/Typography';
import axios from 'axios';

import 'react-loading-skeleton/dist/skeleton.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { toast } from 'react-toastify';
import { loadCharts } from 'components/Services/api';
import TracksTable from 'components/TracksTable';
import { ContentWrapper } from 'components/Layout';

function Home() {
  const [chart, setChart] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    const loadData = async () => {
      try {
        const response = await loadCharts();
        setChart(response);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
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
          <TracksTable isLoading={isLoading} tracks={chart?.tracks.data} />
        </div>
        <AsydeStyled>
          <Greytitle>Global</Greytitle>
          <SectionTitle>Top Artists</SectionTitle>
          <Artists isLoading={isLoading} artists={chart?.artists?.data}></Artists>
        </AsydeStyled>
      </SongsTableAndArtistSection>
    </ContentWrapper>
  );
}

export default Home;
