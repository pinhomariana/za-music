import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { ArtistSkelentoWrapper, ArtistsWrapper, Wrapper, ArtistsLoadingWrapper } from './styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';

import ArtistsCards from './ArtistsCards';

import 'react-loading-skeleton/dist/skeleton.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { SectionSubtitle } from 'components/UI/Typography';

function Artists({ isLoading, artists }) {
  return (
    <Wrapper>
      <ArtistsWrapper>
        {isLoading &&
          [...Array(8).keys()].map((block) => (
            <ArtistsLoadingWrapper key={block}>
              <Skeleton wrapper={ArtistSkelentoWrapper} key={block} height={95} width={95} circle />
              <Skeleton height={27} />
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
