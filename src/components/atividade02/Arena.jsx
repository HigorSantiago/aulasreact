import React from "react";
import Hero from "./Enemy";
import Enemy from "./Enemy";

const Arena = (props) => 
    <div> 
        {
            React.Children.map(
                props.children, (pessoa) => {
                    return React.cloneElement( pessoa, {arena:props.arena})
                }
                )
        }
    </div>

export default Arena;