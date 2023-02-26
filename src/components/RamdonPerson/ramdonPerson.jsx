import React from "react";
import styled from "styled-components";
import characters from "../../data";


const Boton = styled.button`
   background-color: red;
   color: white;
   width: 80px;
   height: 33px;
   
`

export default class RamdonPerson extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
            <Boton onClick={this.props.busquedaRamdon}>RANDOM</Boton>
            </div>
        )
    }
}
