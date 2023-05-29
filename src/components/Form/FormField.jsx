import React from 'react'
import './form-field.css'

const FormField = ({label,placeholder,name,type,value,maxlength}) => {
  return (
    <div className='field-container' >
        <label className='label'>{label}</label>
        <input type={type} name={name} placeholder={placeholder} maxlength={maxlength} value={value}  className='form-field'/>
        
    </div>

    
  )
}

export default FormField