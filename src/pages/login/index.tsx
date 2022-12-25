import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from '../../services/api';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useForm } from "react-hook-form";
import { IFormData } from './types'


import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, TitleLogin, Title, Wrapper } from './styles'

const schema = yup.object({
    email: yup.string().email('email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
  }).required();

const Login = () => {
    const navigate = useNavigate()

    const handleClickSignIn = () => {
        navigate('/feed')
    }

    const { control, handleSubmit, formState: {errors}} = useForm<IFormData>({
        resolver: yupResolver(schema),
        reValidateMode: 'onChange',
        mode: 'onChange'
    });

    
    const onSubmit = async (formData: IFormData) => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length && data[0].id){
                navigate('/feed')
            }else{
            alert('Usuário ou senha inválida')
        }
        }catch(e){
        //TODO: HOUVE UM ERRO
    }
};

console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro!</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="Email" control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                        {errors.email && <span>E-mail é obrigatório</span>}
                        <Input name="senha" control={control} type="password" placeholder="Senha" leftIcon={<MdLock />} />
                        {errors.password && <span>Senha é obrigatório</span>}
                        <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type="submit"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText><a href='/cadastro'>Criar conta</a></CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }