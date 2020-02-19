'use strict'

import React, { Component } from 'react'

class Timer extends Component {
    constructor(){
        super()
        this.state = {
            timer: 0
        }
        this.showTimer
    }

    componentDidMount(){
        this.showTimer = setInterval( () => this.setState({ timer: this.state.timer + 1 }), 1000)
    }

    componentWillUnmount(){
        clearInterval( this.showTimer )
    }

    render(){
        return (
            <div> Timer = { this.state.timer } </div>
        )
    }
}
export default Timer