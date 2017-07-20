import React from 'react'

const propTypes = {
    prop : React.PropTypes.string
}

const defaultProps = {
    prop : ''
}

function Form({children}){
    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    return (
    <form 
        onSubmit={handleSubmit}
    >   
        {children}
    </form>
)
}



export default Form;