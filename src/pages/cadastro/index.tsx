import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from '../../services/api';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useForm } from "react-hook-form";
import { IFormData } from './types'


import { BackLogin, Column, Container, LoginText, Account, Row, SubTitleCadastro, TermoUso, TitleCadastro, Title, Wrapper, MdPersonColor, MdMailColor, MdLockColor } from './styles'

const schema = yup.object({
    email: yup.string().email('email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
  }).required();

const Cadastro = () => {
const navigate = useNavigate()

const handleClickSignIn = () => {
        navigate('/login')
    }

    const { control, handleSubmit, formState: {errors}} = useForm<IFormData>({
        resolver: yupResolver(schema),
        reValidateMode: 'onChange',
        mode: 'onChange'
    });

    
    const onSubmit = async (formData: IFormData) => {
        try{
            const { data } = await api.get(`users?name=${formData.name}&users?email=${formData.email}&senha=${formData.password}`);
            if(data.length && data[0].id){
                navigate('/feed')
            }else{
            alert('Usuário ou senha inválida')
        }
        }catch(e){
            alert('Erro ao cadastrar')
    }
};

console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                <BackLogin><a href='/login'>Voltar para login</a></BackLogin>
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleCadastro>Comece agora grátis</TitleCadastro>
                    <SubTitleCadastro>Crie sua conta e make the change._</SubTitleCadastro>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <MdPersonColor>
                            <Input name="Nome Completo" control={control} type="name" placeholder="Nome Completo" leftIcon={<MdPerson />} />
                            {errors.name && <span>O nome é obrigatório</span>}
                        </MdPersonColor>
                        <MdMailColor>
                            <Input name="Email" control={control} type="email" placeholder="E-mail" leftIcon={<MdEmail />} />
                            {errors.email && <span>E-mail é obrigatório</span>}
                        </MdMailColor>
                        <MdLockColor>
                            <Input name="Password" control={control} type="password" placeholder="Password" leftIcon={<MdLock />} />
                            {errors.password && <span>Senha é obrigatório</span>}
                        </MdLockColor>
                        <Button title="Criar minha conta grátis" variant="secondary" onClick={handleClickSignIn} type="submit"/>
                    </form>
                    <TermoUso>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO. </TermoUso>

                    <Row>
                        <Account>Já tenho conta.&nbsp;</Account>
                        <LoginText><a href='/login'>Fazer login</a></LoginText>
                        
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }