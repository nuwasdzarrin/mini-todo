import React from 'react';
import GroupLabel from "../labels/GroupLabel";
import GroupTask from "./GroupTask";
import {ControlPoint as ControlPointIcon} from "@mui/icons-material";
import {Button} from "@mui/material";
import colors from "../../assets/styles/_colors.module.scss";
import {connect} from "react-redux";
import {setModalAddActive, setModalForm} from "../../store/actions/todoAction";


const GroupCard = (props) => {
    const styleBtnAddNewTask = {color: colors.textNewTask, fontSize: '12px'}
    let data= props.data

    return (
        <div className={`todGroupCard ${props.type}`}>
            <GroupLabel label={data.title} classColor={props.type} />
            <div className={'monthLabel todMarginY8'}>{data.description}</div>
            {
                data.items.map(it =>
                    <GroupTask data={it} key={it.id}/>
                )
            }
            <Button sx={styleBtnAddNewTask} startIcon={<ControlPointIcon/>} onClick={
                ()=> props.setModalForm({
                    is_show: true,
                    type: 'add',
                    data: {
                        group_id: data.id
                    }
                })
            }>
                New Task
            </Button>
        </div>
    )
}
const mapStateToProps = state => ({

})

const mapDispatchToProps = {
    setModalAddActive, setModalForm
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupCard)