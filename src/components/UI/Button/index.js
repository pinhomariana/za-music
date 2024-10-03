import React, { Children } from 'react';
import { StyledButton } from './styled';
import PropTypes from 'prop-types';

function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
