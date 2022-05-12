import styled from 'styled-components';

export const ScreenContainer =  styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 5px;
button{
margin-bottom: 10px;
}
`

export const ContainerPost = styled.div`
text-align: center;
margin-bottom: 10px;
background: rgb(255, 255, 255);
border-radius: 5px;
border: 1px solid rgb(255, 69, 0);
box-shadow: 2px 2px 2px 1px rgb(255, 69, 0);
width: 50%;
`

export const Form =  styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 5px;
button{
    width: 50%;
    margin-top: 5px;
    margin-bottom: 5px;
}
`