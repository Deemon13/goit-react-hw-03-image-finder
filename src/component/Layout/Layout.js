import React from "react";
import styled from "styled-components";
const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 12px;
  padding-right: 12px;
`;
const Layout = ({ children }) => <Container>{children}</Container>;
export default Layout;
