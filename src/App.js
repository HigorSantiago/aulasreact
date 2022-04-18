
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
//import "./App.css";

import Home from "./components/Home";
import About from "./components/About";

import CreateStudent from "./components/crud/students/CreateStudent";
import ListStudent from "./components/crud/students/ListStudent";
import EditStudent from "./components/crud/students/EditStudent";

import CreateProfessor from "./components/crud/professor/CreateProfessor";
import ListProfessor from "./components/crud/professor/ListProfessor";
import EditProfessor from "./components/crud/professor/EditProfessor";

import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={"/"} className="navbar-brand" style={{ paddingLeft: 10 }}>CRUD</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navitem">
              <Link to="/" className="nav-link">Home</Link>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Student
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="/CreateStudent">Create Student</a></li>
                <li><a class="dropdown-item" href="/ListStudent">List Student</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Professor
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="/CreateProfessor">Create Professor</a></li>
                <li><a class="dropdown-item" href="/ListProfessor">List Professor</a></li>
              </ul>
            </li>

            <li className="navitem">
              <Link to="/about" className="nav-link">About</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="createStudent" element={<CreateStudent />} />
        <Route path="listStudent" element={<ListStudent />} />
        <Route path="editStudent/:id" element={<EditStudent />} />
        <Route path="createProfessor" element={<CreateProfessor />} />
        <Route path="listProfessor" element={<ListProfessor />} />
      </Routes>
    </div>

  );
}

export default App




/*import Questao01 from './components/Atividade01/Questao01';
import Questao02 from './components/Atividade01/Questao02';
import Questao03 from './components/Atividade01/Questao03';
import Questao04 from './components/Atividade01/Questão04';
import './App.css';
import Casa from './components/hardcoded/Casa';
import Personagem from './components/hardcoded/Personagem';
import IMC from './components/imc/IMC';
import Pai from './components/filhopai/pai';
import CidadeSimples from './components/cidades/CidadeSimples';
import Arena from './components/atividade02/Arena';
import World from './components/atividade02/World';
import Hero from './components/atividade02/Hero';
import Enemy from './components/atividade02/Enemy';
import Contador from './components/hooks/Contador';
*/

/*
import Home from './components/aulas11-04/Home';
import Page1 from './components/aulas11-04/Page1';
import Page2 from './components/aulas11-04/Page2';
import About from './components/aulas11-04/About';
import { Routes, Route, Links, Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default function App() {

  return (

    <div className='Conteiner'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>

        <Link to="/" className="navbar-brand" style={{ paddingLeft: 20 }}>
          UFC
        </Link>

        <div className='collapse navbar-collapse' id="navbarSupportContent">
          <ul className='navbar-nav'>
            <li className='navitem'>
              <Link to="/" className='nav-link' >
                Home
              </Link>
            </li>

            <li className='navitem'>
              <Link to="about" className='nav-link'>
                About
              </Link>
            </li>

            <li className='navitem'>
              <Link to="Page1" className='nav-link'>
                Page1
              </Link>
            </li>

            <li className='navitem'>
              <Link to="Page2" className='nav-link'>
                Page2
              </Link>
            </li>
          </ul>

        </div>





      </nav>
      <div className='Info'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Page1" element={<Page1 />} />
        <Route path="Page2" element={<Page2 />} />
      </Routes>
      </div>
      
    </div>
  )
}

/*
function App(){
  return(
    <Contador></Contador>
  )
}
*/


/*function App() {
  return (
    <div id='Bloco01'>
      <World>
        
          <Arena arena="Arena01">
            <Hero nome="Yusuke" />
            <Enemy nome="Toguro" />
          </Arena>
        

        
          <Arena arena="Arena02">
            <Hero nome="Superman" />
            <Enemy nome="Darkside" />
          </Arena>
        

        <Arena arena="Arena03">
          <Hero nome="Batman" />
          <Enemy nome="Coringa" />
        </Arena>
      </World>
    </div>
  )
}
*/



/*function App(){
  return(
    <div className='App'>
      <CidadeSimples/>
    </div>
  )
}
*/

/*
function App(){
  return(
    <div>
      <Pai/>
    </div>
  )
}
*/




/* 
function App(){
  return (
    <IMC altura = {1.72} peso = {56}/>
  )
    
}
*/


/*
function App(){
  return (
    <div className='App'>
      <Casa casa = "Generica">
      <Personagem nome="Luigi" />
      <Personagem nome="Mario" />
      </Casa>
    </div>
  ); 
}
*/


/*
function App(){
  return (
    <div className='App'>
      <Questao04/>
    </div>
  ); 
}
*/




