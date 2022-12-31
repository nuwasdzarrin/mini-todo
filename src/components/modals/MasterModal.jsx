import * as React from 'react';
import {Box, Button} from '@mui/material';
import PrimaryButton from "../buttons/PrimaryButton";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        secondary: {
            main: '#1D1F20',
        },
    },
});

export default function MasterModal (props) {
    return (
        <div className={'todModal'}>
            <div className={'wrapper'}>
                <div className={'content'}>
                    <div className={'close'}></div>
                    <div>
                        <Box sx={{mb: 3}}>
                            {props.title}
                        </Box>
                        {props.content}
                        <div className={'footer'}>
                            <ThemeProvider theme={theme}>
                                <Button sx={{marginRight: '10px'}} variant={'outlined'} color={'secondary'}>Cancel</Button>
                            </ThemeProvider>
                            <PrimaryButton label={'save'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={'layerDark'}></div>
        </div>
    )
}