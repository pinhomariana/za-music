import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { ArtistsWrapper, Wrapper } from './styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';

import ArtistsCards from './ArtistsCards';

import 'react-loading-skeleton/dist/skeleton.css';
import 'swiper/css';
import 'swiper/css/pagination';

function Artists({ isLoading, artists }) {
  return (
    <Wrapper>
      <ArtistsWrapper>
        {isLoading &&
          [1, 2, 3, 4, 5, 6].map((block) => (
            <Skeleton
              wrapper={ArtistSkelentoWrapper}
              key={num}
              height={116}
              width={220}
              borderRadius={25}
            />
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
