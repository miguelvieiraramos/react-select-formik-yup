import React from 'react';
import Select from 'react-select';
import { useFormikContext, useField } from 'formik'; 

export default function CustomSelect({options, ...props}) {
    const {setFieldValue, setFieldTouched } = useFormikContext();
    const [field, meta] = useField(props.name);
    
    function handleChange(selected) {
        setFieldValue(props.name, selected);
    }

    function handleBlur() {
        setFieldTouched(props.name, true);
    }

    return (
        <>
            <Select 
                options={options} 
                {...field} 
                {...props} 
                onChange={handleChange} 
                onBlur={handleBlur} 
            />
            {meta.touched && meta.error ? (<span>{meta.error.value}</span>) : null}
        </>
    )
}

