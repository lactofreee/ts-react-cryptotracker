import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/theme';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  color: ${(props) => props.theme.textColor};
`;

const ThemeSwitchBtn = styled.button`
  font-size: 20px;
  border: 0;
  border-radius: 50px;
  background-color: ${(props) => props.theme.btnColor};
  color: ${(props) => props.theme.btnTextColor};
  &:hover {
    background-color: ${(props) => props.theme.btnHoverColor};
  }
`;


function App() {
  const [theme, setTheme] = useState(lightTheme)
  const onClick = () => {
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container >
          <Title>Hello</Title>
          <ThemeSwitchBtn onClick={onClick}>switch</ThemeSwitchBtn>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
