import React from 'react';
import styled from 'styled-components';
import Header from './header';
import Footer from './footer';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
`;

const StyledHeader = styled.div`
  height: 40px;
  flex: none;
  z-index: 3;
`;

const StyledBody = styled.div`
  flex: 1;
`;

const StyledFooter = styled.div`
  height: 40px;
  flex: none;
  background-color: pink;
  z-index: 3;
`;

const Layout = ({ children }) => (
  <StyledWrapper>
    <StyledHeader>
      <Header />
    </StyledHeader>
    <StyledBody>
      { children }
    </StyledBody>
    <StyledFooter>
      <Footer />
    </StyledFooter>
  </StyledWrapper>
)

export default Layout;
