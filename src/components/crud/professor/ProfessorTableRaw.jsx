import React from "react";
import { Link } from "react-router-dom";

const ProfessorTableRaw = ({professor}) => {
    const {id,name,university,degree} = professor
    return (
        <tr>
            <td>
                {id}
            </td>
            <td>
                {name}
            </td>
            <td>
                {university}
            </td>
            <td>
                {degree}
            </td>
            <td style={{textAlign:"center"}}>
                <Link to={`/editProfessor/${id}`} className="btn btn-primary">Editar</Link>
            </td>
            <td style={{textAlign:"center"}}>
                <button className="btn btn-danger">Apagar</button>
            </td>
        </tr>
    )
}

export default ProfessorTableRaw