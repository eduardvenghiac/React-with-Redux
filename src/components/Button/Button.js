import React from 'react';

const Button = (props) => {

    var buttonType;
    switch(props.type){
        case 'edit':
            buttonType=props.editTask;
            break;
        case 'delete':
            buttonType=props.deleteTask;
            break;
        case 'save':
            buttonType=props.saveTask;
            break;
        case 'cancel':
            buttonType=props.cancelTask;
            break;
        case 'handleSubmit':
            buttonType=props.handleSubmitTask;
            break;
    }
    return (
        <div className="button">
            <button onClick={buttonType}>{props.name}</button>
        </div>
    );
}

export default Button;