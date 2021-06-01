import React from 'react'

const Button = (props) => {
    return <div style = {{color: 'blue',background: 'green', borderRadius: "5px"}}>{props.buttonText}
    {props.children}
    </div>
}

export default Button