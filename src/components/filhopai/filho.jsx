import React from "react";

const Filho = (props) => {
    return(
        <div>
            <button onClick={
                ()=>props.notificarPai(" Nem jesuais agradou todo muindo")}
            >
                Enviar mensagem pro meu pai
            </button>
        </div>
    )
}

export default Filho;