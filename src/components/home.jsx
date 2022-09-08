import React from "react";
import Inputs from "./inputs";
import Cards from "./cards";
import { HomeCont } from "./styles/cards";


export default function Home(){
    return(
        <HomeCont>
            <Cards/>
            <Inputs/>
        </HomeCont>
    )
}