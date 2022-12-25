import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";

import { Container, Column, Title, TitleHighLight } from './styles'

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
            <TitleHighLight>#RANKING 5 TOP DA SEMANA</TitleHighLight>
            <UserInfo percentual={35} nome="Vitor Pires" image="https://avatars.githubusercontent.com/u/88112014?v=4" />
            <UserInfo percentual={15} nome="Vitor Pires" image="https://avatars.githubusercontent.com/u/88112014?v=4" />
            <UserInfo percentual={60} nome="Vitor Pires" image="https://avatars.githubusercontent.com/u/88112014?v=4" />
            <UserInfo percentual={100} nome="Vitor Pires" image="https://avatars.githubusercontent.com/u/88112014?v=4" />
            <UserInfo percentual={75} nome="Vitor Pires" image="https://avatars.githubusercontent.com/u/88112014?v=4" />
            </Column>
        </Container>
    </>)
}

export { Feed }