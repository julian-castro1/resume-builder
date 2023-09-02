import { useState } from 'react'
import PropTypes from 'prop-types'

import Address from '../helper/Address'
import BulletPoint from '../helper/BulletPoint'
import Date from '../helper/Date'
import Website from '../helper/Website'
import Title from '../helper/Title'
import Email from '../helper/Email'
import CheckBox from '../helper/CheckBox'
import Input from '../helper/Text'


PersonalInfo.propTypes = {
    title: PropTypes.string.isRequired,
}

function PersonalInfo({title}){
    const [info, setInfo] = useState({
        name: '',
        email: '',
        website: '',
        address: '',
        phone: '',
        linkedin: '',
        summary: '',
    });

    function handleInputChange(e){
        const inputType = e.target.dataset.inputtype;
        const value = e.target.value;
        setInfo(prevInfo => ({ ...prevInfo, [inputType]: value }));
    }

    const inputs = Object.keys(info);

    return (
        <div className='PersonalInfo'>
            {inputs.map(input => (
                <Input
                    key={input}
                    onChange={handleInputChange}
                    placeholder={input.charAt(0).toUpperCase() + input.slice(1)} // Capitalizes the first letter
                    value={info[input]}
                    inputType={input}
                />
            ))}
        </div>
    )
}

export default PersonalInfo