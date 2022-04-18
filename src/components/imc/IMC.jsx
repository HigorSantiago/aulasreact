import React from "react";

const IMC = (props) => {

    function calcularIMC(){
        return props.peso/(props.altura*props.altura);
    }

    function avaliarIMC(calcularIMC){
        let resp = "";
        
        if( calcularIMC < 18.5 ){
            resp = "abaixo do peso";
        } else  if ( calcularIMC >= 18.5 && calcularIMC <= 24.9 ){
            resp = "peso normal";
        } else if ( calcularIMC >= 24.9 && calcularIMC <= 29.9 ){
            resp = "sobrepeso";
        } else if( calcularIMC >= 30 && calcularIMC <= 34.9 ){
            resp = "obesidade grau 1";
        } else if( calcularIMC >= 35 && calcularIMC <= 39.9 ){
            resp = "obesidade grau 2";
        } else {
            resp = "obesidade morbida";
        }

        return resp;
    }
    return (
        <div>
            <h3>
                A minha altura é {props.altura} e 
                o meu peso é {props.peso}
            </h3>
            <h3>
                O meu IMC é {calcularIMC(props.altura,props.peso)}
            </h3>
            <h3>
                Você está em faixa de {avaliarIMC(calcularIMC(props.altura,props.peso))}
            </h3>
        </div>
    )
}


export default IMC;