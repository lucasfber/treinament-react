import React from 'react'
import PropTypes from 'prop-types'
import './LinkButton.css'

const propTypes = {
    caption : PropTypes.string.isRequired,
    onClick : PropTypes.func

}

const defaultProps = {
    onClick : Function.prototype
}

function LinkButton(props){

    const handleClick = e =>{
        e.preventDefault();
        e.stopPropagation();
    }
}