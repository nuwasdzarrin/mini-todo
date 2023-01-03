import React from 'react'
import {FormControl, OutlinedInput} from "@mui/material";

const FromTask = (props) => {
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

export default FromTask