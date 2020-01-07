'use strict'

import React, { Component }from 'react'
import Title from "./title";

class App extends Component {
    render() {
        return (
            <div>
                <Title nome='Jhonnis' sobrenome={ { first: 'Da', last: 'Silva'} }/>
            </div>
        )
    }
}

export default App