'use strict'

import React from 'react'

const Title = React.createClass({
render: function() {
        return (
            <div>
                <h1>Olá {this.props.nome}!</h1>
            </div>
        )
    }
})

export default Title