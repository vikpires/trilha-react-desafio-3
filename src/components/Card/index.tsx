import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'
import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles';

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://getwallpapers.com/wallpaper/full/b/7/0/765203-technology-background-images-1920x1080-hd.jpg"/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/88112014?v=4"/>
                    <div>
                        <h4>Vitor Pires</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto do curso de HTML e CSS</h4>
                    <p>Projeto feito no curso de HTML e CSS no Bootcamp DIO do Orange Tech+...<strong>Saiba Mais</strong> </p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }
