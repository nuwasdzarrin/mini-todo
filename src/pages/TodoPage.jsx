import * as React from 'react';
import {CardContent, Grid} from "@mui/material";
import PrimaryButton from "../components/buttons/PrimaryButton";
import {Add as AddIcon} from '@mui/icons-material';
import GroupCard from "../components/cards/GroupCard";

export default function TodoPage() {
    const HeaderPage = () => {
        return (
            <div className={'todFlexCenterStart todHeaderPage'}>
                <div className={'title todMarginRight10'}>Product Map</div>
                <PrimaryButton label={'Add New Group'} icon={<AddIcon />}/>
            </div>
        )
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
        </>
    )
}