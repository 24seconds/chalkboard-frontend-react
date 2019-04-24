import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../context';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Mine = props => {
  const { mining } = useContext(Context);
  return (
    <StyledWrapper onClick={mining}>asdf</StyledWrapper>
  )
}

export default Mine;
