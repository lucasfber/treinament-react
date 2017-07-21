import React from 'react'
import './List.css'

const propTypes = {
    items : PropTypes.arrayOf(propTypes.object),
    keyProp : PropTypes.string.isRequired,
    selectedKey : PropTypes.string
}

function List(props) {
    const template = React.Children.only(props.children);

    return (
        <ul>
            {props.items.map(item => (
                <li
                    key={item[props.keyProp]}
                    className={props.selectedKey === item[props.keyProp] ? 'list-item-selected' : ''}
                >
                    {React.cloneElement(template, {item})}
                </li>    
            ))}
        </ul>
    )
}
