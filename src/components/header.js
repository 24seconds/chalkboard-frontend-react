import React, { useContext } from 'react';
import styled from 'styled-components';
import pickToolIcon from '../../public/img/pick-tool.png'
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

const StyledMenuButton = styled.div`
  margin: 0 10px;
  width: 20px;
  height: 20px;
  & > img {
    width: 100%;
    height: 100%;
  }
`;

const Header = () => {

  const { toggle } = useContext(Context);
  
  return (
    <StyledWrapper>
      <div>Logo</div>
      <StyledMenuButton onClick={toggle}>
        <img src={pickToolIcon} />
      </StyledMenuButton>
    </StyledWrapper>
  )
}


export default Header;
