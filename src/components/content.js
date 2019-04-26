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

const StyledBoardWrapper = styled.div`
  flex: 3;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBoard = styled.div`
  width: 1200px;
  height: 500px;
  margin: 30px;
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
      <StyledBoardWrapper>
        <StyledBoard>
          <Board />
        </StyledBoard>
      </StyledBoardWrapper>
      <StyledMine display={isToggle ? 1 : 0}>
        <Mine />
      </StyledMine>
    </StyledWrapper>
  )
}

export default Content;
