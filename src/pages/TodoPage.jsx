import React, {useEffect} from 'react';
import {
    CardContent,
    Grid
} from "@mui/material";
import PrimaryButton from "../components/buttons/PrimaryButton";
import {Add as AddIcon} from '@mui/icons-material';
import GroupCard from "../components/cards/GroupCard";
import CreateEditModal from "../components/modals/CreateEditModal";
import {connect} from "react-redux";
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {getTodos, setModalForm} from "../store/actions/todoAction";

const TodoPage = ({todos, modal_form, getTodos, setModalForm}) => {
    useEffect(() => {
        getTodos()
    }, [getTodos])
    const HeaderPage = () => {
        return (
            <div className={'todFlexCenterStart todHeaderPage'}>
                <div className={'title todMarginRight10'}>Product Map</div>
                <div onClick={
                    ()=> {
                        setModalForm({
                            is_show: true,
                            type: 'add_group',
                            data: {}
                        })
                    }
                }>
                    <PrimaryButton label={'Add New Group'} icon={<AddIcon />} />
                </div>
            </div>
        )
    }

    const convertType = (payload) => {
        if (payload % 4 === 0) return 'primary'
        else if (payload % 4 === 1) return 'secondary'
        else if (payload % 4 === 2) return 'danger'
        else if (payload % 4 === 3) return 'success'
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
            {modal_form.is_show && <CreateEditModal />}}'
        </>
    )
}

const mapStateToProps = state => ({
    todos: state.todoReducer.todos,
    modal_form: state.todoReducer.modal_form,
})
const mapDispatchToProps = { getTodos, setModalForm }
export default DragDropContext(HTML5Backend)(connect(mapStateToProps, mapDispatchToProps)(TodoPage))