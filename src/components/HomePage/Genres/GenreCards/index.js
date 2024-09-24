// External libraries
import React from 'react';
import PropTypes from 'prop-types';

// Styled components
import { Wrapper, GenreName } from './styled';

function GenreCards({ backgroundImage, name }) {
  return (
    <Wrapper $bg={backgroundImage}>
      <GenreName>{name}</GenreName>
    </Wrapper>
  );
}

GenreCards.propTypes = {
  backgroundImage: PropTypes.string,
  name: PropTypes.string,
};

export default GenreCards;
