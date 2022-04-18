import React from "react";


const Enemy = (props) => {
    
    const { nome, arena } = props
            
    return(
        <div>
            <h2>Nome do Vilão: {nome} <br></br> Arena : {arena}</h2>
        </div>
    )
}


export default Enemy;