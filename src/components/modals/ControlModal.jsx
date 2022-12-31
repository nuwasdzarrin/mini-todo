import * as React from 'react';
import {BorderColor as BorderColorIcon, Delete as DeleteIcon, East as EastIcon,
    West as WestIcon} from '@mui/icons-material';

export default function ControlModal () {
    return (
        <div className={'todControlModal'}>
            <div className={'todFlexCenterStart todMarginBottom10'}>
                <WestIcon sx={{mr: 2}} />
                <div className={'label'}>Move Right</div>
            </div>
            <div className={'todFlexCenterStart todMarginBottom10'}>
                <EastIcon sx={{mr: 2}} />
                <div className={'label'}>Move Left</div>
            </div>
            <div className={'todFlexCenterStart todMarginBottom10'}>
                <BorderColorIcon sx={{mr: 2}} />
                <div className={'label'}>Edit</div>
            </div>
            <div className={'todFlexCenterStart todMarginBottom10'}>
                <DeleteIcon sx={{mr: 2}} />
                <div className={'label'}>Delete</div>
            </div>
        </div>
    )

}