import React, { Component } from 'react';
import Button from '../Button/Button';

class Task extends Component{

    state = {
        editing:false
    }

    edit = () => {
        this.setState({editing:true});
    }

    save = () => {
        const text = this.refs.newDescription.value;
        this.props.updateTaskName(text,this.props.index);
        this.setState({editing:false})
    }

    cancel = () => {
        this.setState({editing:false})
    }

    delete = () => {
        this.props.removeTaskFromList(this.props.index);
    }

    renderNormalTask = () => {
        return(
            <div className="task">
                <div className="taskDescription">{this.props.children}
                    <Button type="edit" name="Edit" editTask={this.edit}/>
                    <Button type="delete" name="Delete" deleteTask={this.delete}/>
                </div>
                <p>{this.props.quoteJoke}</p>
                <hr />
            </div> 
         );
    }

    renderEditingTask = () => {
        return(
            <div className="task">
                <div className="taskDescription">
                    <input type="text" ref="newDescription" defaultValue={this.props.children}/>
                    <Button type="save" name="Save" saveTask={this.save}/>
                    <Button type="cancel" name="Cancel" cancelTask={this.cancel}/>
                </div>
                <p>{this.props.quoteJoke}</p>
                <hr />
            </div> 
         );
    }

    render = () => {
        if(this.state.editing){
            return this.renderEditingTask();
        }else{
            return this.renderNormalTask();
        }
    }
}

export default Task;