import React, { Component } from "react";

/*function Questao01() {
    return (
        <div>
            <h1>Nome: Higor Santiago</h1>
            <h1>Curso: Engenharia de Software</h1>
            <h1>Cidade: Baturité-CE </h1>
        </div>
    )
}
*/


const Questao01 = (props) => {

    const { nome, curso, cidade } = props
    return (
        <div>
            <h2>Nome: {nome}</h2>
            <h2>Curso: {curso}</h2>
            <h2>Cidade: {cidade}</h2>
        </div>
    )
}

export default Questao01;