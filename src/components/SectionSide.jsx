import { useState } from 'react'
import './SectionSide.css'
import PropTypes from 'prop-types'

import Title from './helper/Title'
import PersonalInfo from './sections/PersonalInfo'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Additional from './sections/Additional'

SectionSide.propTypes = {
    onChanges: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
}

let eduSections = [];
let expSections = [];
let addSections = [];

function SectionSide({onChanges, title}){
    return (
        <div className='section_body'>
        <Title name={title} />
        <PersonalInfo 
            onChanges={onChanges}
        />
        <Education />
        <Experience />
        <Additional />
        </div>
    )
}

export default SectionSide