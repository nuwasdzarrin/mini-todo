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
export default connect(mapStateToProps,{getTodos})(TodoPage)