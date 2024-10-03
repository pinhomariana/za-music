// External libraries
import React, { useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-loading-skeleton/dist/skeleton.css';
import 'swiper/css';
import 'swiper/css/pagination';
import PropTypes from 'prop-types';

// Local services
import { loadCharts, loadRadio } from 'components/Services/api';

// Local components
import { Artists, Hero } from 'components/HomePage';
import Genres from 'components/HomePage/Genres';
import TracksTable from 'components/TracksTable';
import { ContentWrapper } from 'components/Layout';
import { SectionSubtitle, SectionTitle } from 'components/UI/Typography';

// Styled components
import { Greytitle, SongsTableAndArtistSection, AsydeStyled } from './styled';
import { PlayerDispatchContext } from 'context/playerContext';

function Home() {
  const [chart, setChart] = useState();
  const [radio, setRadio] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const [chartResponse, radioResponse] = await Promise.all([loadCharts(), loadRadio()]);
        setRadio(radioResponse);
        setChart(chartResponse);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);
  return (
    <main>
      <Hero tracks={radio} />
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
    </main>
  );
}

export default Home;
