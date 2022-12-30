import * as React from 'react';
import {Outlet} from "react-router-dom";
import {CssBaseline} from "@mui/material";

export default function TodoLayout() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Outlet/>
        </React.Fragment>
    );
}