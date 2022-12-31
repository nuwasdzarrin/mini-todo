import * as React from 'react';
import {
    CardContent,
    Grid,
    FormControl,
    InputLabel,
    Input,
    FormHelperText,
    TextField,
    OutlinedInput
} from "@mui/material";
import PrimaryButton from "../components/buttons/PrimaryButton";
import {Add as AddIcon} from '@mui/icons-material';
import GroupCard from "../components/cards/GroupCard";
import MasterModal from "../components/modals/MasterModal";

export default function TodoPage() {
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
    return (
        <>
            <HeaderPage />
            <hr className={'todHrHeaderPage'}/>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <GroupCard type={'primary'} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <GroupCard type={'secondary'} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <GroupCard type={'danger'} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <GroupCard type={'success'} />
                    </Grid>
                </Grid>
            </CardContent>
            {/*<MasterModal title={<ModalTitle />} content={<FromAddTask />} />*/}
        </>
    )
}