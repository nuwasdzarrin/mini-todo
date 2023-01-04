import React from 'react';
import GroupLabel from "../labels/GroupLabel";
import GroupTask from "./GroupTask";
import {ControlPoint as ControlPointIcon} from "@mui/icons-material";
import {Button} from "@mui/material";
import colors from "../../assets/styles/_colors.module.scss";
import {connect} from "react-redux";
import {setModalForm} from "../../store/actions/todoAction";
import { DropTarget } from 'react-dnd';
import types from '../../store/types'

const columnTarget = {
    drop(props, monitor) {
        const item = monitor.getItem();
        if (item.parentIndex === props.index) {
            return undefined;
        }
        console.log("item: ", item, " props: ", props)
        // props.dispatch(shiftCard({
        //     index: item.parentIndex,
        //     cardIndex: item.index,
        // }, {
        //     index: props.index
        // }));
    },
    canDrop(props) {
        return props.column.title && props.column.title.length;
    },
};
function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }
}

const GroupCard = (props) => {
    const styleBtnAddNewTask = {color: colors.textNewTask, fontSize: '12px'}
    let data= props.data

    return this.props.connectDropTarget (
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
                        group_id: data.id,
                        group_name: data.title
                    }
                })
            }>
                New Task
            </Button>
        </div>
    )
}
const mapStateToProps = state => ({})

const mapDispatchToProps = {
    setModalForm
}

export default DropTarget(types.CARD, columnTarget, collect)(connect(mapStateToProps, mapDispatchToProps)(GroupCard))