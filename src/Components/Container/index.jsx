import React from "react";
import styled from "styled-components";

import Titulo from "../Titulo";
import Conta from "../Conta";
import Extrato from "../Extrato";
import Quadrado_Pix  from "../Quadrado_Pix/Quadrado_Pix";

const Container = styled.div`
  background-color: ${({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Bloco_Pix = styled.div`
  
  display: flex;
  flex-direction: column;
`

export default () => {
  return (
    <Container>
      <Titulo>Olá Fulano!</Titulo>
      <Bloco_Pix>
        <Conteudo>
          <Conta />
          <Extrato />
        </Conteudo>
        <Quadrado_Pix />
      </Bloco_Pix>
    </Container>
  );
};
