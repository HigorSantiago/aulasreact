import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { professor } from './data.js'

function EditProfessor() {

    const [name, setName] = useState("")
    const [course, setCourse] = useState("")
    const [degree, setDegree] = useState("")
    const params = useParams()

    //https://pt-br.reactjs.org/docs/hooks-effect.html
    useEffect(
        () => {
            
            //console.log(params.id)
            const professor = professor[params.id]
            //console.log(professor)
            setName(professor.name)
            setCourse(professor.university)
            setDegree(professor.degree)
        }
        ,
        [params.id]
    )

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name)
        console.log(course)
        console.log(degree)
    }

    return (
        <>
            <main>
                <h2>
                    Editar Estudante
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text"
                            className="form-control"
                            value={(name == null || name === undefined) ? "" : name}
                            name="name"
                            onChange={(event) => { setName(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>University: </label>
                        <input type="text"
                            className="form-control"
                            value={course ?? ""}
                            name="course"
                            onChange={(event) => { setCourse(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Degree: </label>
                        <input type="text"
                            className="form-control"
                            value={degree ?? ""}
                            name="ira"
                            onChange={(event) => { setDegree(event.target.value) }} />
                    </div>
                    <div className="form-group" style={{ paddingTop: 20 }}>
                        <input type="submit" value="Atualizar Professor" className="btn btn-primary" />
                    </div>
                </form>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default EditProfessor