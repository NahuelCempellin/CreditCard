import styled from "styled-components";



export const Thanks= styled.div`


width:50%;
height: 20em;

display:flex;
align-items:center;
justify-content: space-around;
flex-direction: column;


h2{
    color: #220d34;
}


button{
    width:79%;
    padding:1em;
    border-radius: 10px;
    background-color:#220d34;
    color: white;
    border:1px solid transparent;
    


    &:active{
        box-shadow: box-shadow:7px 6px 28px 1px rgba(0, 0, 0, 0.24);
    transform: translateY(4px);
    }
}

`