import styled from 'styled-components'
import BG from '../../images/bg-main-desktop.png'

export const HomeCont= styled.div`


min-height: 100vh;
width: 100%;

display: flex; 
align-items:center;
justify-content: center;


`

export const CardCont= styled.div`

width:33%;
height:100vh;
background: url(${BG});

display:flex;
align-items:center;
justify-content: center;

`


export const InputCont= styled.div`

height:99.7vh;
width: 75%;

display:flex;
align-items: center;
justify-content:center;

.Inputcont{
    
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction: column;
    


    .labels{
        
        width:47%;
        margin-right: 12em;
        display:flex;
        align-items:center;
        justify-content: space-between;
    }

    .date{
       
        margin-bottom: 2em;
        width: 85%;
        height: 5em;
        margin-right: 3.5em;
        display: flex;
        align-items:center;
        justify-content: space-around;


        .cont{
            
            width:45%;
            display:flex;
            align-items:center;
            justify-content: space-around;
         
        }

        .DDMM{
            
            input{
                width: 3em;
                padding: 1em;
                border-radius: 10px;
                border: 1px solid #220d34;

            }
        }

        .code{
            input{
                padding: 1em;
                border-radius: 10px;
                border: 1px solid #220d34;

            }
        }
    }

    button{
        width:79%;
        padding:1em;
        border-radius: 10px;
        background-color:#220d34;
        color: white;
        border:1px solid transparent;
        margin-right: 2.5em;


        &:active{
            box-shadow: box-shadow:7px 6px 28px 1px rgba(0, 0, 0, 0.24);
        transform: translateY(4px);
        }
    }
   
    height:25em;
    width: 50%;

    .cardData{
        
        height: 15em;
        width:90%;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction: column;
        
        div{
           
            height: 5em;
            width:95%;
            display:flex;
            align-items:flex-start;
            justify-content:center;
            flex-direction: column;


            input{
                width:85%;
                padding:.7em;
                border-radius: 10px;
                border: 1px solid #220d34;
           
                font-family: 'Roboto', sans-serif;
            } 

        }

        
    }

}


`