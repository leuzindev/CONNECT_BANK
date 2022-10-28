import React from "react";
import styled from "styled-components";
import logo_nav from "../../assets/images/logo_nav.png"
import { corPrimaria } from "../UI/variaveis";

const BtnCabecalho = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: ${(props) => (props.primary ? "white" : corPrimaria)};
  color: ${(props) => (props.primary ? corPrimaria : "white")};
  @media(max-width: 785px){
    display: none;
  }

`;

const StyledCabecalho = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
  @media(max-width: 785px){
    justify-content: center;
 
  }
`;

const Logo = styled.img`
  @media(max-width: 650px){
    width: 250px;
 
  }
`;

const Cabecalho = () => {
  return (
    <StyledCabecalho>
      <Logo src={logo_nav} alt="Logo Smart Bank" />
      <div>
        <BtnCabecalho primary href="https://google.com">
          Ajuda
        </BtnCabecalho>
        <BtnCabecalho href="https://google.com">Sair</BtnCabecalho>
      </div>
    </StyledCabecalho>
  );
};

export default Cabecalho;
