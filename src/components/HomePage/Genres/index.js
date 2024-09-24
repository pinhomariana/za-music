// External libraries
import React, { useEffect, useState, useRef } from 'react';
import { toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';
import { Swiper, SwiperSlide } from 'swiper/react';

// Local services
import { loadGenres } from 'components/Services/api';

// Local components
import GenreCards from './GenreCards';

// Styled components
import { Button, GenreWrapper, GenresWrapper, ButtonsWrapper, TitleRow, Wrapper } from './styled';
import { SectionSubtitle } from 'components/UI/Typography';
import { ArrowLeft, ArrowRight } from 'components/UI/Icons/Icons';

// CSS files
import 'react-loading-skeleton/dist/skeleton.css';
import 'swiper/css';
import 'swiper/css/pagination';

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
            <Skeleton
              key={block}
              wrapper={GenresWrapper}
              height={116}
              width={220}
              borderRadius={25}
            />
          ))}
        <Swiper slidesPerView="auto" ref={sliderRef} spaceBetween={21}>
          {genres?.map((genre) => {
            return (
              <SwiperSlide key={genre.id} style={{ width: 'auto' }}>
                <GenreCards name={genre.name} backgroundImage={genre.picture_medium} />{' '}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </GenreWrapper>
    </Wrapper>
  );
}

export default Genres;
