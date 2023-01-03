import * as React from 'react';
import {Box, Grid, LinearProgress, Typography} from '@mui/material';
import {MoreHoriz as MoreHorizIcon, CheckCircle as CheckCircleIcon} from '@mui/icons-material';
import colors from '../../assets/styles/_colors.module.scss';
import ControlModal from "../modals/ControlModal";
import {connect} from "react-redux";
import {setActionActive} from "../../store/actions/todoAction";


const GroupTask= (props) => {
    let data = props.data
    return (
        <div className={'todGroupTask'}>
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

export default connect(mapStateToProps, {setActionActive})(GroupTask)