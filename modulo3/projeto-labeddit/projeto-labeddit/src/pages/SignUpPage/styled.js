import styled from "styled-components";

export const ScreenContainer =  styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
color: #373737;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 5px;
input{
width: 363px;
height: 60px;
left: 33px;
top: 403px;
}
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
border-radius: 27px;
border: none;
p{
width: 91px;
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

export const LogoImage = styled.img`
width: 84px;
height: 84.02px;
left: 167px;
top: 133px;
`

export const Button = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 13px 133px;
width: 100px;
height: 51px;
left: 29px;
top: 676px;
border: 1px solid #FE7E02;
border-radius: 27px;
p{
width: 142px;
height: 25px;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
text-align: center;
color: #FE7E02;
flex: none;
order: 0;
flex-grow: 0;
}
`