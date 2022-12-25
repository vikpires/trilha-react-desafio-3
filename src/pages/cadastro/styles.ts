import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 90px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
`
export const Wrapper = styled.div`
    max-width: 300px;
`
export const Column = styled.div`
    flex: 1;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
`
export const Title = styled.h2`
font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 32px;
width: 450px;
margin-bottom: 120px;
line-height: 44px;

color: #FFFFFF;
`

export const TitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubTitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    width: 320px;
    margin-bottom: 35px;
    line-height: 25px;
`
export const TermoUso = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    width: 360px;
    margin-bottom: 11px;
    margin-top: 27px;
    line-height: 25px;

`
export const Account = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #FFFFFF;
`
export const LoginText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    a{
        color: #23DD7A;
        text-decoration: none;
                }
              
    ::hover{
        color: #23DD7A;
        text-decoration: none;
                }
   `
export const MdPersonColor = styled.p`
    color: #8647AD;
`
export const MdMailColor = styled.p`
    color: #8647AD;
`
export const MdLockColor = styled.p`
    color: #8647AD;
`
export const BackLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    width: 320px;
    margin-top: 35px;
    line-height: 25px;

a{
    color: #8647AD;

    text-decoration: none;
            }
          
::hover{
    color: #8647AD;
    text-decoration: none;
            }
`