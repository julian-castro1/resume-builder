import { useState } from 'react'
import PropTypes from 'prop-types'

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}

function Input({onChange, placeholder, inputType, value}){

    
    return (
        <input className="text-input" type="text"
            onChange={onChange}
            placeholder={placeholder}
            data-inputType={inputType}
            value={value}
        />
    )
}

export default Input