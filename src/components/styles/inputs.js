import styled from "styled-components"
import frontCard from '../../images/bg-card-front.png'
import BacktCard from '../../images/bg-card-back.png'

export const CardsCont = styled.div`



display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:100%;
height: 30em;

// div{
   
//     border-radius: 10px;
//     width: 27em;
//     height:17em;
//     margin-bottom: 2em;
// }

.front{

    margin-left:15em;
    border-radius: 10px;
    width: 27em;
    height:17em;
    margin-bottom: 2em;
    color: white;
    box-shadow: 10px 10px 5px 0pxrgba(0,0,0,0.75);
    -webkit-box-shadow: 12px 11px 5px 0px rgb(0 0 0 / 12%);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    background: url(${frontCard});

    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

   .circles{
        
        width:85%;
        height: 2em;
        margin-top: 1em;

        display:flex;
        align-items:center;
        justify-content:flex-start;


        .circle{
            margin-left: .5em;
            width:1em;
            height: 1em;
            border-radius: 50%;
            border:1px solid white;
        }
   }


   .number{
    
    width: 100%;
    margin-top:4em;
   }

   .dataDDYYY{
    
    width: 90%;
    display:flex;
    align-items:center;
    justify-content: space-between;
   }
  
    
    
}

.back{
    
    margin-left:25em;
    border-radius: 10px;
    width: 27em;
    min-height: 15em;
    margin-bottom: 2em;

    box-shadow: 10px 10px 5px 0pxrgba(0,0,0,0.75);
    -webkit-box-shadow: 12px 11px 5px 0px rgb(0 0 0 / 12%);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    background: url(${BacktCard});
  
    
    display:flex;
    align-items:center;
    justify-content:center;

    .cvc{
       

        width:86%;
        height:2em;
        color: white;
        display:flex;
        align-items: center;
        justify-content: flex-end;
    }

    
}
`