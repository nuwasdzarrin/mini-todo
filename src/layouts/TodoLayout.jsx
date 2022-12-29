import * as React from 'react';
import {Outlet} from "react-router-dom";
import {CssBaseline, Container} from "@mui/material";

export default function TodoLayout() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="false">
                <Outlet/>
            </Container>
        </React.Fragment>
    );
}