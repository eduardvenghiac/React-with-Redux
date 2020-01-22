import React, { Component } from 'react';
import Task from '../components/Task/Task'
import Button from '../components/Button/Button'
import {connect} from 'react-redux';
import * as actionTypes from '../store/actions'
import quote from '../Request/quote'

class TaskList extends Component{

    // state = {
    //     taskNames:[],
    //     taskName:''
    // }

    // removeTask = (i) => {
    //     let arr = this.state.taskNames;
    //     arr.splice(i,1);
    //     this.setState({taskNames:arr})
    // }

    // updateTask = (newDescription,i) => {
    //     let arr = this.state.taskNames;
    //     arr[i] = newDescription;
    //     this.setState({taskNames:arr})
    // }

    // handleChange = (event) => {
    //     this.setState({taskName:event.target.value});
    // }

    // handleSubmit = () => {
    //     if(this.state.taskName.length==0){
    //         return;
    //     }
    //     this.setState({taskNames:this.state.taskNames.concat(this.state.taskName),taskName:''});
    // }

    addTask = async () => {

        const quuote = await quote();
        console.log(quuote);

        this.props.onAddTask(this.props.taskName,quuote);
    }

    render(){
        return(
            <main>
                <div className="taskList">
                    <p>Tasks:{this.props.taskNames.length}</p>
                    {
                        this.props.taskNames.map((tskName,i) =>
                        {
                            return (
                            <Task key={i} index={i} quoteJoke={tskName.quote} updateTaskName={(text)=>this.props.onEditTask(text,i)} removeTaskFromList={()=>this.props.onRemoveTask(tskName.id)}>{tskName.taskName}</Task>
                            );
                        })
                    }
                </div>
                <p>Add new task here:</p>
                <div className="newTask">
                    <input type="text" onChange={(event)=>this.props.onAddTaskName(event.target.value)} value={this.props.taskName}/>
                    <Button type="handleSubmit" name="Add task" handleSubmitTask={this.addTask}/>
                </div>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        taskNames:state.taskNames,
        taskName:state.taskName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddTask:(taskName,quote)=>dispatch({type:actionTypes.ADD_TASK,taskName:taskName,quote:quote}),
        onRemoveTask:(id)=>dispatch({type:actionTypes.REMOVE_TASK,id:id}),
        onEditTask:(newTaskName,index)=>dispatch({type:actionTypes.EDIT_TASK,newName:newTaskName,index:index}),
        onAddTaskName:(taskName)=>dispatch({type:actionTypes.ADD_TASK_NAME,taskName:taskName})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(TaskList);