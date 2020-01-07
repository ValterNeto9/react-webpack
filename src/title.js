'use strict'

import React from 'react'

const Title = ({ nome, sobrenome }) => (
    <h1>Olá { `${nome} ${sobrenome.first} ${sobrenome.last}`}!</h1>
)

Title.defaultProps = {
    nome: 'Desconhecido',
    sobrenome: { first: 'Sobrenome ',
                    last: 'não informado'
                }
}

export default Title