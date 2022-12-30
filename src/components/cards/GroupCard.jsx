import * as React from 'react';
import GroupLabel from "../labels/GroupLabel";
import GroupTask from "./GroupTask";
import {ControlPoint as ControlPointIcon} from "@mui/icons-material";
import {Button} from "@mui/material";
import colors from "../../assets/styles/_colors.module.scss";


export default function GroupCard (props) {
    const styleBtnAddNewTask = {color: colors.textNewTask, fontSize: '12px'}

    return (
        <div className={`todGroupCard ${props.type}`}>
            <GroupLabel label={'Group Task 1'} classColor={props.type} />
            <div className={'monthLabel todMarginY8'}>January - March</div>
            <GroupTask/>
            <GroupTask/>
            <Button sx={styleBtnAddNewTask} startIcon={<ControlPointIcon/>}>New Task</Button>
        </div>
    )
}