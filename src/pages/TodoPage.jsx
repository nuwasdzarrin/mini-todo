import React, {useEffect} from 'react';
import {
    CardContent,
    Grid,
    FormControl,
    OutlinedInput
} from "@mui/material";
import PrimaryButton from "../components/buttons/PrimaryButton";
import {Add as AddIcon} from '@mui/icons-material';
import GroupCard from "../components/cards/GroupCard";
import MasterModal from "../components/modals/MasterModal";
import {connect} from "react-redux";
import {getTodos} from "../store/actions/todoAction";

const TodoPage = ({todos, modal_form, getTodos}) => {
    useEffect(() => {
        getTodos()
    }, [getTodos])
    const HeaderPage = () => {
        return (
            <div className={'todFlexCenterStart todHeaderPage'}>
                <div className={'title todMarginRight10'}>Product Map</div>
                <PrimaryButton label={'Add New Group'} icon={<AddIcon />}/>
            </div>
        )
    }
    const RemoveConfirm = () => {
        return <div>Are you sure want to delete this task? your action can’t be reverted.</div>
    }
    const FromAddTask = () => {
        return (
            <>
                <FormControl sx={{ mb: 3, width: '100%' }} variant="outlined">
                    <div className={'todLabelInput'}>Task Name</div>
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        placeholder={'Type your Task'}
                    />
                </FormControl>
                <FormControl sx={{ mb: 10, width: '50%' }} variant="outlined">
                    <div className={'todLabelInput'}>Progress</div>
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        placeholder={'70%'}
                    />
                </FormControl>
            </>
        )
    }
    const ModalTitle = () => {
        return <div className={'title'}>Create Task</div>
    }
    const convertType = (payload) => {
        if (payload===1) return 'secondary'
        else if (payload===2) return 'danger'
        else if (payload===3) return 'success'
        else return 'primary'
    }
    return (
        <>
            <HeaderPage />
            <hr className={'todHrHeaderPage'}/>
            <CardContent>
                <Grid container spacing={2}>
                    {
                        todos.map((todo, key) =>
                            <Grid item xs={12} md={3} key={key}>
                                <GroupCard type={convertType(key)} data={todo} />
                            </Grid>
                        )
                    }
                </Grid>
            </CardContent>
            {modal_form.is_show && <MasterModal title={<ModalTitle/>} content={<FromAddTask/>}/>}
        </>
    )
}

const mapStateToProps = state => ({
    todos: state.todoReducer.todos,
    modal_form: state.todoReducer.modal_form,
})
export default connect(mapStateToProps,{getTodos})(TodoPage)