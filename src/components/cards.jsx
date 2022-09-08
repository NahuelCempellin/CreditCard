import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { CardCont } from "./styles/cards";
import { CardsCont } from "./styles/inputs";
import logo from '../images/favicon-32x32.png'


export default function Cards(){
    
    const CardData = useSelector((state)=> state.data);
    const [data, setData]= useState(false);


    useEffect(()=>{
        if(CardData.cardNumber){

            setData(true)
        }
    },[CardData])




    

    return(
    <CardCont>
        <CardsCont>
                <div className="front">
                    <div className="circles">
                    <img src={logo}/>

                    <div className="circle">

                    </div>
                    </div>
                        
                    <div className="number">
                        <h2>{data === true ? CardData.cardNumber : '0000000000000000'}</h2>
                    </div>


                    <div className="dataDDYYY">
                        <p>{data === true ? CardData.name : 'John Doe'}</p>

                        <p>{data === true ?  CardData.month + '/' + CardData.year : '/'}</p>
                    </div>


                </div>


                <div className="back">

                    <div className="cvc">
                        <p>{data=== true? CardData.cvc : '000'}</p>
                    </div>

                </div>
        </CardsCont>
    </CardCont>
    )
}