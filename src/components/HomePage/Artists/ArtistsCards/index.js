// External libraries
import React from 'react';
import PropTypes from 'prop-types';

// Styled components
import { ArtistName, Image, Wrapper } from './styled';

function ArtistsCards({ image, name }) {
  return (
    <Wrapper>
      <Image src={image} alt={`${name}'s photo`}></Image>
      <ArtistName>{name}</ArtistName>
    </Wrapper>
  );
}

ArtistsCards.propTypes = {
  Image: PropTypes.string,
  name: PropTypes.string,
};

export default ArtistsCards;
