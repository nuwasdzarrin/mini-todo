import React, { useRef } from 'react';
import { useDrag, useDrop } from "react-dnd";
import {Box, Grid, LinearProgress, Typography} from '@mui/material';
import {MoreHoriz as MoreHorizIcon, CheckCircle as CheckCircleIcon} from '@mui/icons-material';
import colors from '../../assets/styles/_colors.module.scss';
import ControlModal from "../modals/ControlModal";
import {connect} from "react-redux";
import {setActionActive} from "../../store/actions/todoAction";
import {updateTodoItem} from "../../store/actions/todoItemAction";


const GroupTask= (props) => {
    let data = props.data
    const ref = useRef(null);
    const [, drop] = useDrop({
        accept: "CARD",
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.todo_id;
            const hoverIndex = props.index;
            if (dragIndex === hoverIndex) {
                return;
            }
            // const hoverBoundingRect = ref.current?.getBoundingClientRect();
            // const hoverMiddleY =
            //     (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            // const clientOffset = monitor.getClientOffset();
            // const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            // if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            //     return;
            // }
            // if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            //     return;
            // }
            props.moveCardHandler(dragIndex, hoverIndex);
            item.dstIndex = hoverIndex;
        }
    });

    const [{ isDragging }, drag] = useDrag({
        item: { ...data, currentColumnName: data.todo_id, type: "CARD" },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (dropResult && item.dstIndex) {
                props.updateTodoItem(data.todo_id, data.id, {
                    target_todo_id: item.dstIndex
                })
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    const opacity = isDragging ? 0.4 : 1;
    drag(drop(ref));
    return (
        <div ref={ref} className={'todGroupTask'} style={{ opacity }}>
            <div className={'title'}>{data.name}</div>
            <hr />
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <div className={'todFlexCenterStart'}>
                        <Box sx={{ width: '100%', mr: 1 }}>
                            <LinearProgress variant="buffer" value={data.progress_percentage} valueBuffer={100} className={'todLinearProgress complete'} />
                        </Box>
                        <Box sx={{ minWidth: 35 }}>
                            {
                                data.progress_percentage < 100 ?
                                    <Typography variant="body2" color="text.secondary">{`${data.progress_percentage}%`}</Typography>
                                    : <CheckCircleIcon fontSize={'small'} sx={{color: colors.progressGreen}} />
                            }
                        </Box>
                    </div>
                </Grid>
                <Grid item justifyContent="flex-end" xs={2} style={{textAlign: 'right'}}>
                    <Box sx={{position: 'relative'}}>
                        <MoreHorizIcon onClick={() => {
                            props.setActionActive(props.is_modal_control === data.id ? null : data.id)
                        }} />
                        { props.is_modal_control === data.id && <ControlModal data={data}/> }
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({
    is_modal_control: state.todoReducer.is_modal_control
})
const mapDispatchToMap = {setActionActive, updateTodoItem}

export default connect(mapStateToProps, mapDispatchToMap)(GroupTask)