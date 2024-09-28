import React, { useEffect, useState } from 'react';
import { InputWrapper, NothingFoundText, TableTitle, Wrapper } from './styled';
import { toast } from 'react-toastify';
import { search } from 'components/Services/api';
import TracksTable from 'components/TracksTable';
import Input from 'components/UI/Input';
import SearchIcon from 'assets/search.svg';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [tracks, setTracks] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const response = await search(searchQuery);
        setTracks(response);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchQuery) loadData();
  }, [searchQuery]);

  return (
    <div>
      <Wrapper>
        <InputWrapper>
          <Input
            startIcon={SearchIcon}
            placeholder="Search..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </InputWrapper>
        {searchQuery && (
          <div>
            <TableTitle>Results by: {searchQuery}</TableTitle>
            {(isLoading || (!isLoading && tracks?.length > 0)) && (
              <TracksTable isLoading={isLoading} tracks={tracks} />
            )}
          </div>
        )}
        {searchQuery && !isLoading && tracks?.length <= 0 && (
          <div>
            <NothingFoundText>Nothing was found :(</NothingFoundText>
          </div>
        )}
      </Wrapper>
    </div>
  );
}

export default Search;
