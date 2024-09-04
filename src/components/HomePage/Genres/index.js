import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ButtonsWrapper, TitleRow, Wrapper } from './styled';
import { SectionSubtitle } from 'components/UI/Typography';
import { Button } from './styled';
import { ArrowLeft, ArrowRight } from 'components/UI/Icons/Icons';
import GenreCards from './GenreCards';

function Genres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get('/genre');
      setGenres(response.data.data.filter((genre) => genre.name.toLowerCase() !== 'all'));
    };
    loadData();
  }, []);

  return (
    <Wrapper>
      <TitleRow>
        <SectionSubtitle>Genrers</SectionSubtitle>
        <ButtonsWrapper>
          <Button width={36} height={36} withBackground>
            <ArrowLeft />
          </Button>
          <Button width={36} height={36} withBackground>
            <ArrowRight />
          </Button>
        </ButtonsWrapper>
      </TitleRow>
      {genres.map((genre) => (
        <GenreCards key={genre.id} name={genre.name} backgroundImage={genre.picture_medium} />
      ))}
    </Wrapper>
  );
}

export default Genres;
