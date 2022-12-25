import React from "react";
import logo from '../../assets/logo-dio.png';
import { useNavigate } from "react-router-dom";

import { Button } from '../Button';

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';

import { IHeader } from './types';


const Header = ({ autenticado }: IHeader) => {
    const navigate = useNavigate();
  
    const handleClickSignIn = () => {
        navigate('/login')
    }
  
    const handleClickRegister = () => {
      navigate('/cadastro')
  }
      return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da dio" />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar..." />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/88112014?v=4" />

                    ) : (
                    <>
                    <MenuRight href="/">Home</MenuRight>
                    <Button title="Entrar" onClick={handleClickSignIn}/>
                    <Button title="Cadastrar" onClick={handleClickRegister} />
                    </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}
export { Header }