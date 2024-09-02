import React from 'react';
import { StyledButton } from './styled';
import PropTypes from 'prop-types';

function IconButton({ withBackground, ...props }) {
  return (
    <StyledButton $withBackground={withBackground} {...props}>
      {props.children}
    </StyledButton>
  );
}

IconButton.propTypes = {
  children: PropTypes.element,
  withBackground: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  backgroundColor: PropTypes.string,
};

export default IconButton;
