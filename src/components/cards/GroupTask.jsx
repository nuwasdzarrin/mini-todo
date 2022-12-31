import * as React from 'react';
import {Box, Grid, LinearProgress, Typography} from '@mui/material';
import {MoreHoriz as MoreHorizIcon, CheckCircle as CheckCircleIcon} from '@mui/icons-material';
import colors from '../../assets/styles/_colors.module.scss';
import ControlModal from "../modals/ControlModal";


export default function GroupTask () {
    return (
        <div className={'todGroupTask'}>
            <div className={'title'}>Redesign the zero-g doggi bag lalaaa</div>
            <hr />
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <div className={'todFlexCenterStart'}>
                        <Box sx={{ width: '100%', mr: 1 }}>
                            <LinearProgress variant="buffer" value={60} valueBuffer={100} className={'todLinearProgress complete'} />
                        </Box>
                        <Box sx={{ minWidth: 35 }}>
                            {
                                false ?
                                    <Typography variant="body2" color="text.secondary">{`${Math.round(10)}%`}</Typography>
                                    : <CheckCircleIcon fontSize={'small'} sx={{color: colors.progressGreen}} />
                            }
                        </Box>
                    </div>
                </Grid>
                <Grid item justifyContent="flex-end" xs={2} style={{textAlign: 'right'}}>
                    <Box sx={{position: 'relative'}}>
                        <MoreHorizIcon />
                        <ControlModal />
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}