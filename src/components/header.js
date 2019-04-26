import React, { useContext } from 'react';
import styled from 'styled-components';
import pickToolIcon from '../../public/img/pick-tool.png';
import addIcon from '../../public/img/add.png';
import Context from '../context';

const StyledWrapper = styled.header`
  height: 100%;
  background-color: green;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledIcon = styled.div`
  margin: 0 10px;
  width: 20px;
  height: 20px;
  & > img {
    width: 100%;
    height: 100%;
  }
`;

const StyledMine = styled.div`
  display: flex;
  flex-direction: row;
`;

const Header = () => {

  const { toggle, gold, setAdd } = useContext(Context);
  
  return (
    <StyledWrapper>
      <StyledIcon onClick={setAdd}>
        <img src={addIcon} alt="add" />
      </StyledIcon>
      <div>Logo</div>
      <StyledMine>
        <div>current: {gold}</div>
        <StyledIcon onClick={toggle}>
          <img src={pickToolIcon} alt="pick" />
        </StyledIcon>
      </StyledMine>
    </StyledWrapper>
  )
}


export default Header;
