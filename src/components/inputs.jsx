import React, {useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import { InputCont } from "./styles/cards";
import { setState } from "../reducer/actions";
import OK from '../images/icon-complete.svg'
import { Thanks } from "./styles/thanks";



export default function Inputs(){
    const dispatch= useDispatch();
    const [change,setChange]= useState(false)
    const [data, setData]=useState({
        name:'',
        cardNumber:'',
        date:'',
        month:'',
         year:'',
        cvc:'',
    })
    

    function changeHandler(){
        dispatch(setState(data))
        setChange(true)
    }

    function deChangeHandler(){
        setChange(false)
    }



    return(
    <InputCont>
{

    change=== false?
    <div className="Inputcont">
        <div className="cardData">
            <div>
            <label>Card holder name</label>
            <input placeholder="Full name" value={data.name} onChange={(e)=>setData({...data, name:e.target.value})}/>
            </div>
            <div>
            <label>Card Number</label>
            <input placeholder="Card Number" value={data.cardNumber} onChange={(e)=>setData({...data, cardNumber: e.target.value})}/>
            </div>
        </div>

        <div className="labels">
                <label>{'EXP.DATE (MM/YY)'}</label>
                <label>{'CVC'}</label>
            </div>


        <div className="date">

            <div className="cont">
            <div className="DDMM">
            <input placeholder="MM"  type={'number'} max='12' min='1' value={data.date.month} onChange={(e)=> setData({...data, month: e.target.value})}/>
            </div>
            
           
            <div className="DDMM">
            <input placeholder="YY"   value={data.date.year} onChange={(e)=> setData({...data, year: e.target.value})}/>
            </div>
            </div>
            
            <div className="code">
            <input placeholder="e.g 123" value={data.cvc} onChange={(e)=> setData({...data, cvc: e.target.value})}/>
            </div>
        </div>

        <button onClick={changeHandler}>Confirm</button>
    </div>
    :


    <Thanks>
        <div>
            <img src={OK}/>
        </div>
        <h2>THANK YOU!</h2>
        <p>We've added your card detalis</p>
        <button onClick={deChangeHandler}>Continue</button>
    </Thanks>
    }
    </InputCont>
    )
}