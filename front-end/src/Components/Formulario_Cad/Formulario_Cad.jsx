import React, { useState } from 'react'
import styled from 'styled-components'
import {useForm} from 'react-hook-form'

import bank_logo from '../../assets/images/logo_nav.png'
import btn_voltar from '../../assets/images/btn_retornar.png'

import api from '../../api.js'
import Axios from 'axios'

const Bloco_Formulario = styled.div`
    
    min-height: 100%;
`

const Formulario_Register = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

const Input_registro = styled.input`
    border: none;
    outline: none;
    margin: 15px;
    height: 50px;
    width: 500px;
    border-radius: 5px;
    &::placeholder{
        font-size: 15px;
        
        font-weight: bold;
    }
    @media (max-width: 550px){
        width: 100%;
    }
`

const Bloco_btn = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`

const Btn_registro = styled.button`
    border: none;
    outline: none;
    background-color: #007862;
    height: 60px;
    width: 80%;
    font-size: 30px;
    letter-spacing: 2px;
    color: white;
    font-family: 'Jockey One', sans-serif;
    &:hover{
        cursor: pointer;
    }
    @media (max-width: 550px){
        width: 150px;
        font-size: 18px;
    }


`

const Btn_Voltar = styled.img`
    transition: 1s all;
    width: 60px;
    &:hover{
        transition: 1s all;
        transform: scale(1.1);
        cursor: pointer;
    }
    @media (max-width: 550px){
        width: 50px;
    }
`

const Bloco_titulo = styled.div`
    
`

const Titulo = styled.h1`
    margin: 0;
    margin-top: 20px;
    font-family: 'Koulen', cursive;
    font-size: 50pt;
    color: white;

`
const Bloco_logo = styled.div`
    
`


const Logo = styled.img`
    margin-bottom: 20px;
    @media (max-width: 550px){
        width: 250px;
    }
    
`

const Formulario_Cad = () => {

    const {register, handleSubmit} = useForm();

    const pegaDados = (e) => {
        Axios.post('http://localhost:3080/users', {
            name: e.name,
            email: e.email,
            password: e.password
        }).then((response) => {
            console.log(response)
        })
    }

    return (
        <Bloco_Formulario>
            <Formulario_Register onSubmit={handleSubmit(pegaDados)}>
                <Bloco_logo>
                    <Logo src={bank_logo} />
                </Bloco_logo>
                <Bloco_titulo>
                    <Titulo>Registro</Titulo>
                </Bloco_titulo>
                <Input_registro {...register("name")} placeholder='Nome'></Input_registro>
                <Input_registro {...register("email")}type="email" placeholder='E-mail'></Input_registro>
                <Input_registro {...register("password")} type="password" placeholder='Senha'></Input_registro>
                <Input_registro {...register("password2")} type="password" placeholder='Senha Novamente'></Input_registro>
                <Bloco_btn>
                    <Btn_registro >CADASTRAR</Btn_registro>
                    <Btn_Voltar src={btn_voltar} />
                </Bloco_btn>
            </Formulario_Register>
        </Bloco_Formulario>
    )


}



export default Formulario_Cad