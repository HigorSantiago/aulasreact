import React from "react";


const Hero  = (props) => {
    
    const { nome, arena } = props
            
    return(
        <div>
            <h2>Nome do Heroi: {nome} <br></br> Arena : {arena}</h2>
        </div>
    )
}

export default Hero;