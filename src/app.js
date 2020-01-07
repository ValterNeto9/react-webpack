'use strict'

import React from 'react'
import Title from "./title";

const App = React.createClass({
    render: function () {
        return (
        <div>
            <Title nome='Jhonnis' sobrenome={ { first: 'Da', last: 'Silva'} }/>
        </div>
    )}
})

export default App