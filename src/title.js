'use strict'

import React from 'react'

const Title = React.createClass({
    getDefaultProps: function () {
        return {
            nome: 'Desconhecido',
            sobrenome: { first: 'Sobrenome ',
                            last: 'não informado'
                        }
        }
    },
    render: function() {
            return (
                <h1>Olá {this.props.nome + ' ' + this.props.sobrenome.first + ' ' + this.props.sobrenome.last}!</h1>
            )
        }
    })

export default Title