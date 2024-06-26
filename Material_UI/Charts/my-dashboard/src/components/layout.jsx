// import * as React from 'react';
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Toolbar>
          <Typography varient="h6" component="div" sx={{ flexGrow: 1 }}>
            My Dashboard
          </Typography>
        </Toolbar>
      </div>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
