import { useState } from 'react'
import PropTypes from 'prop-types'

Title.propTypes = {
    name: PropTypes.string.isRequired,
}

function Title({name}){
    return (
        <div className='title'>
        <h2>{name}</h2>
        </div>
    )
}

export default Title