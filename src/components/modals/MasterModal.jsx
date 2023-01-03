import * as React from 'react';
import {Box, Button} from '@mui/material';
import PrimaryButton from "../buttons/PrimaryButton";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {connect} from "react-redux";
import {setModalAddActive, closeModalForm} from "../../store/actions/todoAction";

const theme = createTheme({
    palette: {
        secondary: {
            main: '#1D1F20',
        },
    },
});

const MasterModal = (props) => {
    const onClickSave = () => {
        let payload= {
            group_id: props.modal_form.data.group_id,
            type: props.modal_form.type,
            data: props.modal_form,
        }
        console.log("add payload: ", payload)
    }
    return (
        <div className={'todModal'}>
            <div className={'wrapper'}>
                <div className={'content'}>
                    <div className={'close'} onClick={() => props.closeModalForm()}/>
                    <div>
                        <Box sx={{mb: 3}}>
                            {props.title}
                        </Box>
                        {props.content}
                        <div className={'footer'}>
                            <ThemeProvider theme={theme}>
                                <Button sx={{marginRight: '10px'}} variant={'outlined'} color={'secondary'} onClick={
                                    () => props.closeModalForm()
                                }>Cancel</Button>
                            </ThemeProvider>
                            <PrimaryButton label={'save'} onClick={()=> onClickSave()} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={'layerDark'}/>
        </div>
    )
}

const mapStateToProps = state => ({
    modal_form: state.todoReducer.modal_form
})

const mapDispatchToProps = {
    setModalAddActive, closeModalForm
}

export default connect(mapStateToProps, mapDispatchToProps)(MasterModal);