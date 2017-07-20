import React from 'react'
import './Button.css'

export default (props) => (
    <div>
        <button className='btn button-danger'>{props.labelButton}</button>
        <button className='btn button-info'>{props.labelButton}</button>
        <button className='btn button-success'>{props.labelButton}</button>
    </div>
)

/*
    function SaveButton(props){
        return (
          
        );
    }

    function SaveButton(props){
        return (
            <Button  
                {...props}
                caption="Salvar"
                type="success"
            />
        );
    }

    Button.Save = props => (
          <Button  
                {...props}
                caption="Salvar"
                type="success"
            />
    )

    Button.Cancel = props => (
          <Button  
                {...props}
                caption="Cancelar"
                type="info"
            />
    )

    Button.Ok = props => (
          <Button  
                {...props}
                caption="Ok"
                type="success"
            />
    )
*/
