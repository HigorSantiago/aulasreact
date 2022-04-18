import React from "react";
import Filho from "./filho";

const Pai = () => {
    function msgFilho(msg) {
        alert("Recebi do meu filho:" + msg)
    }

    return (
        <div>
            <Filho notificarPai = {msgFilho}/>
        </div>
    )
}

export default Pai;