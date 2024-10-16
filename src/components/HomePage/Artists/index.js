// External libraries
import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { Swiper, SwiperSlide } from 'swiper/react';

// Local components
import ArtistsCards from './ArtistsCards';

// Styled components
import { ArtistSkelentoWrapper, ArtistsWrapper, Wrapper, ArtistsLoadingWrapper } from './styled';

// CSS files
import 'react-loading-skeleton/dist/skeleton.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { useWindowSize } from 'assets/hooks/useWindowSize';
import { breakpoints } from 'Styles/Breakpoints';

function Artists({ isLoading, artists }) {
  const { width } = useWindowSize();
  const isMobileLayout = width < breakpoints.md;

  return (
    <Wrapper>
      <ArtistsWrapper>
        {isLoading &&
          [...Array(8).keys()].map((block) => (
            <ArtistsLoadingWrapper key={block}>
              <Skeleton
                wrapper={ArtistSkelentoWrapper}
                key={block}
                height={isMobileLayout ? 75 : 95}
                width={isMobileLayout ? 75 : 95}
                circle
              />
              <Skeleton height={isMobileLayout ? 19 : 27} />
            </ArtistsLoadingWrapper>
          ))}

        <Swiper slidesPerView="auto" spaceBetween={21}>
          {!isLoading &&
            artists?.map((artist) => (
              <SwiperSlide key={artist.id} style={{ width: 'auto' }}>
                <ArtistsCards name={artist.name} image={artist.picture_medium} />{' '}
              </SwiperSlide>
            ))}
        </Swiper>
      </ArtistsWrapper>
    </Wrapper>
  );
}

Artists.propTypes = {
  isLoading: PropTypes.bool,
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      picture_medium: PropTypes.string,
    }),
  ),
};

export default Artists;
