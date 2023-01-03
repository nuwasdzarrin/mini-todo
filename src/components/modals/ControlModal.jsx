import * as React from 'react';
import {BorderColor as BorderColorIcon, Delete as DeleteIcon, East as EastIcon,
    West as WestIcon} from '@mui/icons-material';
import {setModalForm} from '../../store/actions/todoAction'
import {updateTodoItem} from '../../store/actions/todoItemAction'
import {connect} from "react-redux";

const ControlModal = (props) => {
    let data = props.data
    const moveTask = (isLeft= false) => {
        props.updateTodoItem(data.todo_id, data.id, {
            target_todo_id: isLeft ? data.left : data.right
        })
    }
    return (
        <div className={'todControlModal'}>
            {data.right ?
                <div className={'todFlexCenterStart todMarginBottom10 pointer'} onClick={() => moveTask()}>
                    <EastIcon sx={{mr: 2}} />
                    <div className={'label'}>Move Right</div>
                </div> : ''}
            {data.left ?
                <div className={'todFlexCenterStart todMarginBottom10 pointer'} onClick={() => moveTask(true)}>
                    <WestIcon sx={{mr: 2}} />
                    <div className={'label'}>Move Left</div>
                </div> : ''}
            <div className={'todFlexCenterStart todMarginBottom10 pointer'} onClick={
                ()=> props.setModalForm({
                    is_show: true,
                    type: 'edit',
                    data: {
                        group_id: data.todo_id,
                        group_name: '',
                        task_id: data.id,
                        task_name: data.name,
                        task_progress_percentage: data.progress_percentage
                    }
                })
            }>
                <BorderColorIcon sx={{mr: 2}} />
                <div className={'label'}>Edit</div>
            </div>
            <div className={'todFlexCenterStart todMarginBottom10 pointer'} onClick={
                ()=> props.setModalForm({
                    is_show: true,
                    type: 'delete',
                    data: {
                        group_id: data.todo_id,
                        group_name: '',
                        task_id: data.id,
                        task_name: data.name
                    }
                })
            }>
                <DeleteIcon sx={{mr: 2}} />
                <div className={'label'}>Delete</div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
    setModalForm, updateTodoItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlModal);