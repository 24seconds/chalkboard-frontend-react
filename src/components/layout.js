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
`;

const StyledBody = styled.div`
  flex: 1;
  background-color: rgba(20.6%, 65.5%, 0%, 0.5);
`;

const StyledFooter = styled.div`
  height: 40px;
  flex: none;
  background-color: pink;
`;

const Layout = ({ children }) => (
  <StyledWrapper>
    <StyledHeader>
      <Header />
    </StyledHeader>
    <StyledBody>
      {children}
    </StyledBody>
    <StyledFooter>
      <Footer />
    </StyledFooter>
  </StyledWrapper>
)

export default Layout;
