import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../context';

import Board from './board';
import Mine from './mine';

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: rgba(20.6%, 65.5%, 0%, 0.5);
`;

const StyledBoard = styled.div`
  flex: 3;
`;

const StyledMine = styled.div`
  flex: 1;
  min-width: 300px;
  height: 100%;
  background-color: rgba(31.6%, 65.5%, 100%, 0.5);
  display: ${props => (props.display ? 'block' : 'none')};
`;

const Content = () => { 
  const { isToggle } = useContext(Context);
  return (
    <StyledWrapper>
      <StyledBoard>
        <Board />
      </StyledBoard>
      <StyledMine display={isToggle}>
        <Mine />
      </StyledMine>
    </StyledWrapper>
  )
}

export default Content;
