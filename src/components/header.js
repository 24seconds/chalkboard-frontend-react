import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.header`
  height: 100%;
  background-color: green;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const StyledMenuButton = styled.div`
  margin: 0 10px;
`;

class Header extends React.Component {
  handleMenuButton() {

  }

  render() {
    return (
      <StyledWrapper>
        <StyledMenuButton>
          
        </StyledMenuButton>
        <div>Logo</div>
      </StyledWrapper>
    )
  }
}


export default Header;
