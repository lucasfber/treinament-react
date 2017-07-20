import React from 'react'
import PropTypes from 'prop-types'
import './TextBox.css'

const propTypes = {
    caption : PropTypes.string.isRequired,
    size : PropTypes.oneOf(['small', 'medium', 'large']),
    value : PropTypes.object,
    onChange : PropTypes.func
}

const defaultProps = {
    size : 'medium',
    onChange : Function.prototype
}

function TextBox(props){

    const handleChange = e => {
        e.preventDefault()
        e.stopPropagation()
        const value = e.target.value;
        props.onChange(value);
    }

    const handleClick = e =>{
        e.preventDefault();
        e.stopPropagation();
    }
    return (
        <div className={`form-field text-box field-${props.size}`}>
            <label>{props.caption}</label>
            <input 
                type="text" 
                value={props.value} 
                onChange={handleChange}
            />
        </div>
    )

}