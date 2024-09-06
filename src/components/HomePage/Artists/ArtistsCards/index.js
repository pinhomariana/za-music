import React from 'react';
import { Wrapper } from './styled';
import PropTypes from 'prop-types';
import { SectionSubtitle } from 'components/UI/Typography';

function ArtistsCards({ image, name }) {
  return (
    <Wrapper>
      <SectionSubtitle>{name}</SectionSubtitle>
    </Wrapper>
  );
}

ArtistsCards.propTypes = {
  Image: PropTypes.string,
  name: PropTypes.string,
};

export default ArtistsCards;
