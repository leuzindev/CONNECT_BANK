import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "../../Components/UI/temas";

import Cabecalho from "../../Components/Cabecalho/index";
import Container from "../../Components/Container";
import { GlobalStyle } from "../../Components/GlobalStyle";
import SwitcherTema from "../../Components/SwitcherTema";

export const BtnTema = styled.button`
  position: absolute;
  top: 4vh;
  right: 20px;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;


export const Home = () => {
  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema);
  };
  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
    <GlobalStyle />
    <BtnTema onClick={toggleTema}>
      <SwitcherTema tema={tema} />
    </BtnTema>
    <Cabecalho />
    <Container />
  </ThemeProvider>
  )
}
