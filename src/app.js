'use strict'

import React, { Component }from 'react'

class App extends Component {

    constructor () {
        super()
        this.state = {
            text: "Texto inicial"
        }
    }


    render() {
        return (
            <div className='container' onClick={() => this.setState({
                text: "Texto modificado"
            })}>
                { this.state.text }    
            </div>
        )
    }
}

export default App