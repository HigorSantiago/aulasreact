import React, { useState , useEffect } from "react";




const Contador = () => {
    const [contador,setContador] = useState(0);
    const [status,setStatus] = useState('Par')

    useEffect(
       () => {
            if (contador % 2 == 0)
                setStatus('Par');
            else
                setStatus('Impar');
        }

    )

    return (
        <div>
            <h2>Valor do contador: <br></br> <p>{contador}</p> </h2>
            <h2>Par ou Impar: <br></br><p>{status}</p> </h2>

        

            <button onClick={
                () =>       
                    setContador(contador+1)

            }>
                Aumentar Numero
            </button>
        </div>
    )
}


export default Contador;