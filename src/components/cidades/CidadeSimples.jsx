import React, {Component} from "react";

class CidadeSimples extends Component {

    constructor(props){
        super(props)
        this.state = {metrocity:0, arkham :0, limoeiro:0, crato:0}
    }

    votarMetrocity(){
        this.setState({metrocity:this.state.metrocity+1})
    }

    votarArkham(){
        this.setState({arkham:this.state.arkham+1})
    }
    
    votarLimoeiro(){
        this.setState({limoeiro:this.state.limoeiro+1})
    }

    votarCrato(){
        this.setState({crato:this.state.crato+1})
    }
    render() {

        return (
            <div>
                <h3>Metrocity: {this.state.metrocity}</h3>
                <h3>Arkham: {this.state.arkham}</h3>
                <h3>Limoeiro: {this.state.limoeiro}</h3>
                <h3>Crato: {this.state.crato}</h3>

                <button onClick={() => this.votarMetrocity()}>Votar em Metrocity</button>
                <button onClick={() => this.votarArkham()}>Votar em Arkham</button>
                <button onClick={() => this.votarLimoeiro()}>Votar em Limoeiro</button>
                <button onClick={() => this.votarCrato()}>Votar em Crato</button>
               
            </div>
        )
    }
}

export default CidadeSimples;