import styled from 'styled-components';

export const ScreenContainer =  styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 5px;
color: #373737;
button{
margin-bottom: 10px;
}
input{
width: 300px;
height: 50px;
left: 30px;
top: 124px;
margin-top: 25px;
background: #EDEDED;
border-radius: 12px;
border: none;
}
`

export const ContainerPost = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 9px 10px;
width: 300px;
height: 150px;
background: #FBFBFB;
border: 1px solid #E0E0E0;
border-radius: 12px;
flex: none;
order: 0;
flex-grow: 0;
img{   
margin: 3px;    
width: 4vh;
}
`

export const ButtonLike = styled.div`
display: flex;
flex-direction: row;
`

export const Form =  styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 5px;
button{
margin-top: 15px;
margin-bottom: 15px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 13px 133px;
width: 100px;
height: 51px;
left: 29px;
top: 587px;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 12px;
border: none;
p{
height: 25px;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
text-align: center;
color: #FFFFFF;
flex: none;
order: 0;
flex-grow: 0; 
}
}
`