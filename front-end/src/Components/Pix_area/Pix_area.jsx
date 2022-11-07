import React from 'react'
import styled from "styled-components";
import voltar from '../../assets/images/btn_retornar.png'
import pix_logo from '../../assets/images/pix.png'


const Quadrado_pix = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 600px;
    height: 550px;
    border-radius: 9px;
`

const Bloco_titulo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
`
const Bloco_inputs = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 250px;
    width: 100%;
    @media(max-width: 550px){
        width: 80%;
    }
`
const Bloco_voltar = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    height: 10%;
    
   
`
const Pix = styled.img`
    width: 50px;
    height: 50px;
    margin: 20px;
    
`

const Titulo_pix = styled.h1`
    font-family: 'Jockey One', sans-serif;
    color: white;
    font-size: 55pt;
    font-weight: 500;
`

const Inputs_pix = styled.input`
    margin: 20px;
    height: 50px;
    width: 75%;
    border-radius: 15px;
    border: none;
    outline: none;
   
    &::placeholder{
       
        font-size: 18px;
        font-weight: bold;
    }
    

`

const Input_transferir = styled.button`
    border: none;
    outline: none;
    width: 80%;
    height: 60px;
    font-size: 23pt;
    font-family: 'Jockey One', sans-serif;
    background-color: #007862;
    cursor: pointer;
    
`

const Btn_voltar = styled.img`
    cursor: pointer;
    transition: 1s all;
    &:hover{
        transition: 1s all;
        transform: scale(1.1);
    }
    

`
const Pix_area = () => {
    return (
        <Quadrado_pix>
            <Bloco_titulo>
                <Titulo_pix>Pix</Titulo_pix>
                <Pix src={pix_logo} />
            </Bloco_titulo>
            <Bloco_inputs>
                <Inputs_pix placeholder='Valor R$:'/>
                <Inputs_pix placeholder='Chave PIX:'/>
            </Bloco_inputs>
            <Bloco_voltar>
                <Input_transferir>TRANSFERIR</Input_transferir>
                <Btn_voltar src={voltar}/>
            </Bloco_voltar>
        </Quadrado_pix>
    )
}

export default Pix_area