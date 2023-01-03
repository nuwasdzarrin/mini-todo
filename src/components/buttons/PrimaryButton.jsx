import * as React from 'react';
import {Button} from "@mui/material";
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import colors from '../../assets/styles/_colors.module.scss';


export default function PrimaryButton (props) {
    const TodSuccessButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: colors.primary,
        borderRadius: '8px',
        '&:hover': {
            backgroundColor: colors.primary,
        },
    }));
    return (
        <TodSuccessButton variant={'contained'} className={'todBtnSuccess'} startIcon={props.icon} type={'submit'}>
            {props.label}
        </TodSuccessButton>
    )
}