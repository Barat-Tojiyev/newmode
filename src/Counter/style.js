import styled ,{css} from "styled-components";


const container =css`
width: 90%;
margin:0 auto;`

const center=css`
display:flex;
align-items:center`


export const Container=styled.div`
${container}
background: #fff;
`
export  const Navbar=styled.div`
background:  #0D263B;
color: #fff;
padding: 10px 0;
justify-content: ${({justify})=> justify&&justify};
${center}
`
Navbar.Logo=styled.div`
${center}
`
Navbar.Ul=styled.ul`
display: flex;
`
Navbar.Li=styled.li`
list-style-type: none;
margin-left: ${({ml})=> ml ? ml:'10px'};
`
export const Description =styled.p`
margin: ${({m})=> m ? m:'0'};
margin-left: ${({ml})=> ml &&ml};
margin-right: ${({mr})=> mr &&mr};
margin-top: ${({mt})=> mt &&mt};
margin-bottom: ${({mb})=> mb &&mb};
padding: ${({p})=> p ? p:'0'};
padding-left: ${({pl})=> pl &&pl};
padding-right: ${({pr})=> pr &&pr};
padding-top: ${({pt})=> pt &&pt};
padding-bottom: ${({pb})=> pb &&pb};
font-size: ${({fs})=>fs &&fs};
font-weight: ${({fw})=>fw &&fw};
display: ${({d})=>d &&d} ;
color: ${({color})=>color &&color};
text-align:${({text})=>text &&text};

`

export const Search =styled.div`
background: #fff;
padding: 10px 0;
justify-content: ${({justify})=> justify&&justify};
${center}
`
Search.Box=styled.div`
border: 1px solid #E6E9EC;
padding: 10px;
${center}
`
Search.Button=styled.button`
height: 45px;
width: 180px;
background: #0061DF;
border: none;
font-weight: 400;
font-size: 16px;
color: white;
justify-content: ${({justify})=> justify&&justify};
${center}
`
export const SearchInput=styled.input`
width: 500px;
padding: 10px;
font-size: 14px;
color: #0D263B;
outline: none;
border: none
`
export const Icon =styled.span`
font-size: ${({fs})=>fs &&fs};
font-weight: ${({fw})=>fw &&fw};
margin: ${({m})=> m ? m:'0'};
margin-left: ${({ml})=> ml &&ml};
margin-right: ${({mr})=> mr &&mr};
margin-top: ${({mt})=> mt &&mt};
margin-bottom: ${({mb})=> mb &&mb};
padding: ${({p})=> p ? p:'0'};
padding-left: ${({pl})=> pl &&pl};
padding-right: ${({pr})=> pr &&pr};
padding-top: ${({pt})=> pt &&pt};
padding-bottom: ${({pb})=> pb &&pb};
color:${({color})=>color &&color}; 
`

export const Main =styled.div`
  height: 500px;
  background: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)) ,url(https://picsum.photos/1000/1000);
  background-repeat:no-repeat;
  background-size: cover;
  background-position:center;
  color: #fff;
  justify-content: ${({justify})=> justify&&justify};
  ${center}
`
Main.Box =styled.div`
justify-content: ${({justify})=> justify&&justify};
  ${center}
`