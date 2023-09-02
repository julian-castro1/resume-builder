import { useState } from 'react'
import './ResumeRender.css'
import PropTypes from 'prop-types'

import Title from './helper/Title'

ResumeRender.propTypes = {
    title: PropTypes.string.isRequired,
}



function ResumeRender({title}){
    return (
        <div className='resume_body'>
        <Title name={title} />
        </div>
    )
}

export default ResumeRender