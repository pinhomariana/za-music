import React from 'react';
import { Wrapper } from './styled';
import PropTypes from 'prop-types';
import { SectionSubtitle } from 'components/UI/Typography';

function GenreCards({ backgroundImage, name }) {
  return (
    <Wrapper backgroundImage={backgroundImage}>
      <SectionSubtitle>{name}</SectionSubtitle>
    </Wrapper>
  );
}

GenreCards.propTypes = {
  backgroundImage: PropTypes.string,
  name: PropTypes.string,
};

export default GenreCards;
