// External libraries
import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-loading-skeleton/dist/skeleton.css';
import 'swiper/css';
import 'swiper/css/pagination';

// Local services
import { loadCharts } from 'components/Services/api';

// Local components
import { Artists, Hero } from 'components/HomePage';
import Genres from 'components/HomePage/Genres';
import TracksTable from 'components/TracksTable';
import { ContentWrapper } from 'components/Layout';
import { SectionSubtitle, SectionTitle } from 'components/UI/Typography';

// Styled components
import { Greytitle, SongsTableAndArtistSection, AsydeStyled } from './styled';

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
