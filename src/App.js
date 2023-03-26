import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Container } from "./styles/Share";
import { GlobalCSS } from "./styles/GlobalCss";
import Home from "./spa/Home";
import Login from "./spa/Login";
import LoginContextProvider from "./spa/loginContextApi";
import RouteGuard from "./spa/RouteGuard";
export default function App() {
  const theme = {
    colors: "aliceblue",
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalCSS></GlobalCSS>
        <LoginContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={
                <RouteGuard>
                  <Home />
                </RouteGuard>
              } />
            </Routes>
          </Router>
        </LoginContextProvider>
      </Container>
    </ThemeProvider>
  );
}
