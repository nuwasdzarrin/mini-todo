import React, {useEffect, useState} from 'react';
import {Box, Button, FormControl, OutlinedInput} from '@mui/material';
import PrimaryButton from "../buttons/PrimaryButton";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {connect} from "react-redux";
import {closeModalForm} from "../../store/actions/todoAction";
import {storeTodoItem, updateTodoItem, destroyTodoItem} from '../../store/actions/todoItemAction'
import {storeTodo} from '../../store/actions/todoAction'
import {WarningAmber} from "@mui/icons-material";

const theme = createTheme({
    palette: {
        secondary: {
            main: '#1D1F20',
        },
    },
});

const GeneralModal = (props) => {
    const [name, setName] = useState('')
    const [progress, setProgress] = useState(0)
    const [description, setDescription] = useState('')
    let type = props.modal_form.type
    useEffect(() => {
        let modal_form = props.modal_form
        if (modal_form && modal_form.type === 'edit') {
            let data = modal_form.data
            setName(data.task_name)
            setProgress(data.task_progress_percentage)
        }
    }, [props.modal_form])
    const ModalTitle = (props) => {
        let modal_form = props.modal_form
        if (type === 'delete') {
            return (
                <Box sx={{mb: 3, display: 'flex'}}>
                    <WarningAmber color={'error'} sx={{mr: 1}} />
                    <div className={'title'}>Delete Task</div>
                </Box>
            )
        }
        if (type === 'add_group') {
            return (
                <Box sx={{mb: 3}}>
                    <div className={'title'}>Create Group</div>
                </Box>
            )
        }
        let title = type === 'add'
            ? `Create task in ${modal_form.data.group_name}` : `Edit task ${modal_form.data.task_name}`
        return (
            <Box sx={{mb: 3}}>
                <div className={'title'}>{title}</div>
            </Box>
        )
    }
    const onClickConfirm = (e) => {
        e.preventDefault()
        let payload= {
            data: props.modal_form.data,
            store: { name, progress_percentage: parseInt(progress) }
        }
        if (type === 'add')
            props.storeTodoItem(payload.data.group_id, payload.store)
        else if (type === 'edit')
            props.updateTodoItem(payload.data.group_id, payload.data.task_id, payload.store)
        else if (type === 'delete')
            props.destroyTodoItem(payload.data.group_id, payload.data.task_id)
        else if (type === 'add_group')
            props.storeTodo({title: name, description})
    }
    return (
        <div className={'todModal'}>
            <div className={'wrapper'}>
                <div className={'content'}>
                    <div className={'close'} onClick={() => props.closeModalForm()}/>
                    <ModalTitle modal_form={props.modal_form} />
                    <form onSubmit={onClickConfirm}>
                        {type === 'delete' ?
                            <div>
                                Are you sure want to delete task <strong>{props.modal_form.data.task_name}</strong>?&nbsp;
                                your action can’t be reverted.
                            </div> :
                            <div>
                                <FormControl sx={{mb: 3, width: '100%'}} variant="outlined">
                                    <div className={'todLabelInput'}>{type === 'add_group' ? 'Group Name' : 'Task Name'}</div>
                                    <OutlinedInput
                                        placeholder={`Type your ${type === 'add_group' ? 'group' : 'task'}`}
                                        value={name}
                                        // disabled={props.modal_form.type === 'edit'}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </FormControl>
                                {type === 'add_group' ?
                                    <FormControl sx={{mb: 10, width: '100%'}} variant="outlined">
                                        <div className={'todLabelInput'}>Description</div>
                                        <OutlinedInput
                                            type={'text'}
                                            placeholder={'Description'}
                                            value={description}
                                            onChange={e => setDescription(e.target.value)}
                                        />
                                    </FormControl> :
                                    <FormControl sx={{mb: 10, width: '50%'}} variant="outlined">
                                        <div className={'todLabelInput'}>Progress</div>
                                        <OutlinedInput
                                            type={'number'}
                                            placeholder={'70'}
                                            value={progress}
                                            onChange={e => setProgress(e.target.value)}
                                        />
                                    </FormControl>
                                }
                            </div>
                        }
                        <div className={'footer'}>
                            <ThemeProvider theme={theme}>
                                <Button sx={{marginRight: '10px'}} variant={'outlined'} color={'secondary'}
                                        onClick={() => props.closeModalForm()}>Cancel</Button>
                            </ThemeProvider>
                            {type === 'delete' ?
                                <Button color={'error'} variant={'contained'} type={'submit'}>Delete</Button> :
                                <PrimaryButton label={'save'} />
                            }
                        </div>
                    </form>
                </div>
            </div>
            <div className={'layerDark'}/>
        </div>
    )
}

const mapStateToProps = state => ({
    modal_form: state.todoReducer.modal_form
})

const mapDispatchToProps = {
    closeModalForm, storeTodoItem, updateTodoItem, destroyTodoItem, storeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralModal);