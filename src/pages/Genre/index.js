import { loadGenre } from 'Services/api';
import TracksTable from 'components/TracksTable';
import { TextWrapper } from 'components/TracksTable/TrackRow/styled';
import { Music } from 'components/UI/Icons/Icons';
import { MainTitle, SubText } from 'components/UI/Typography';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SongsCountWrapper, Wrapper } from './styled';

function Genre() {
  const { genreId } = useParams();
  const [genre, setGenre] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const genre = await loadGenre(genreId);
        setGenre(genre);
        console.log(genre);
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
      <TextWrapper>
        <MainTitle>{genre?.name}</MainTitle>
        <SongsCountWrapper>
          <Music />
          <SubText>{genre?.tracks?.length} songs</SubText>
        </SongsCountWrapper>
      </TextWrapper>
      <TracksTable isLoading={isLoading} tracks={genre?.tracks} />
    </Wrapper>
  );
}

export default Genre;
