'use strict'

import React, { Component }from 'react'
import Title from "./title";
import Square from "./square";

class App extends Component {
    render() {
        return (
            <div>
                <Title nome='Jhonnis' sobrenome={ { first: 'Da', last: 'Silva'} }/>

                {['blue', 'yellow', 'green'].map( ( color, index ) => (
                    <Square key={ index } color={ color }/>
                ))}
            </div>
        )
    }
}

export default App