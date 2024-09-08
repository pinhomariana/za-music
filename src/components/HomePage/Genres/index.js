import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Button, GenreWrapper, GenresWrapper } from './styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import Skeleton from 'react-loading-skeleton';

import { ButtonsWrapper, TitleRow, Wrapper } from './styled';
import { SectionSubtitle } from 'components/UI/Typography';
import { ArrowLeft, ArrowRight } from 'components/UI/Icons/Icons';
import GenreCards from './GenreCards';

import 'react-loading-skeleton/dist/skeleton.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { loadGenres } from 'components/Services/api';
import { toast } from 'react-toastify';

function Genres() {
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const sliderRef = useRef(null);

  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const response = await loadGenres();
        setGenres(response);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <Wrapper>
      <TitleRow>
        <SectionSubtitle>Genrers</SectionSubtitle>
        <ButtonsWrapper>
          <Button width={36} height={36} withBackground onClick={handlePrev}>
            <ArrowLeft />
          </Button>
          <Button width={36} height={36} withBackground onClick={handleNext}>
            <ArrowRight />
          </Button>
        </ButtonsWrapper>
      </TitleRow>
      <GenreWrapper>
        {isLoading &&
          [...Array(8).keys()].map((block) => (
            <Skeleton wrapper={GenresWrapper} height={116} width={220} borderRadius={25} />
          ))}
        <Swiper slidesPerView="auto" ref={sliderRef} spaceBetween={21}>
          {genres?.map((genre) => (
            <SwiperSlide key={genre.id} style={{ width: 'auto' }}>
              <GenreCards name={genre.name} backgroundImage={genre.picture_medium} />{' '}
            </SwiperSlide>
          ))}
        </Swiper>
      </GenreWrapper>
    </Wrapper>
  );
}

export default Genres;
