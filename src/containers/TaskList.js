import React, { Component } from 'react';
import Task from '../components/Task/Task'
import Button from '../components/Button/Button'
import {connect} from 'react-redux';
import * as actionTypes from '../store/actions'

function* keyMaker() {
    var key = 0;
    while (true)
      yield key++;
  }

class TaskList extends Component{

    render(){
        var gen=keyMaker();
        return(
            <main>
                <div className="taskList">
                    <p>Tasks: {this.props.taskNames.length}</p>
                    {
                        this.props.taskNames.map((tskName,i) =>
                        {
                            let key = gen.next().value;
                            return (
                            <Task key={key} quoteJoke={tskName.quote} updateTaskName={(text)=>this.props.onEditTask(text,i)} removeTaskFromList={()=>this.props.onRemoveTask(tskName.id)}>{tskName.taskName}</Task>
                            );
                        })
                    }
                </div>
                <p>Add new task here:</p>
                <div className="newTask">
                    <input type="text" onChange={(event)=>this.props.onAddTaskName(event.target.value)} value={this.props.taskName}/>
                    <Button type="handleSubmit" name="Add task" handleSubmitTask={()=>this.props.onAddTask(this.props.taskName)}/>
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
        onAddTask:(taskName) => dispatch({type:actionTypes.ADD_TASK_SAGA,taskName:taskName}),
        onRemoveTask:(id) => dispatch({type:actionTypes.REMOVE_TASK,id:id}),
        onEditTask:(newTaskName,index) => dispatch({type:actionTypes.EDIT_TASK,newName:newTaskName,index:index}),
        onAddTaskName:(taskName) => dispatch({type:actionTypes.ADD_TASK_NAME,taskName:taskName})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(TaskList);