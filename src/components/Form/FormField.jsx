import React from 'react'
import './form-field.css'

const FormField = ({label,placeholder,name,type,value}) => {
  return (
    <div className='field-container' >
        <label className='label'>{label}</label>
        <input type={type} name={name} placeholder={placeholder} value={value}  className='form-field'/>
        
    </div>

    
  )
}

export default FormField