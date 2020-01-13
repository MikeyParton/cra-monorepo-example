import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
`;

function Button() {
  return <StyledButton>Shared buttonn</StyledButton>
}

export default Button;
