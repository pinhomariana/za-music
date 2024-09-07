import React from 'react';
import { ArtistName, Image, Wrapper } from './styled';
import PropTypes from 'prop-types';
import { SectionSubtitle } from 'components/UI/Typography';

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
