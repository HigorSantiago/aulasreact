import React from "react";
//import Personagem from "./Personagem";

/*

class Casa extends Components{
    render(){
        return (
           
            <div>
              <Personagem nome = "Arya" casa ="Stark"/>
              <Personagem nome = "Tyrion" casa ="Lannister"/>
              <Personagem nome = "Robert" casa ="Baratheon"/>
            </div>
        )

    }
}

*/


const Casa = (props) => 
    <div> 
        {
            React.Children.map(
                props.children, (personagem) => {
                    return React.cloneElement(personagem, {casa:props.casa})
                }
                )
        }
    </div>


export default Casa;