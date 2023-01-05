import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import {FormControl, InputLabel, InputAdornment, OutlinedInput, IconButton, Box} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import PrimaryButton from "../components/buttons/PrimaryButton";
import Api from '../apis/Api';
import axios from "axios";

const LoginPage= () => {
    const [showPassword, setShowPassword] = React.useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show)
    const onLogin= (e) => {
        e.preventDefault()
        Api.auth.login({email, password}).then(res => {
            console.log("res: ", res)
            if (res.status === 200) {
                axios.defaults.headers['Authorization'] = `Bearer ${res.data.auth_token}`
                navigate('/')
            }
        }).catch(err => {
            throw err
        })
    }
    return (
        <div className={'todAuth'}>
            <div className={'card'}>
                <div className={'title'}>Please Login to continue</div>
                <form onSubmit={onLogin}>
                    <FormControl sx={{mb: 3, width: '100%'}} variant="outlined">
                        <InputLabel htmlFor="auth-email">Email</InputLabel>
                        <OutlinedInput
                            id="auth-email"
                            type="email"
                            label="Email"
                            placeholder={'tony@stark.com'}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <FormControl sx={{mb: 3, width: '100%'}} variant="outlined">
                        <InputLabel htmlFor="auth-password">Password</InputLabel>
                        <OutlinedInput
                            id="auth-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            placeholder={'Password'}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </FormControl>
                    <Box sx={{textAlign: 'right'}}>
                        <PrimaryButton label={'Login'} />
                    </Box>
                </form>
            </div>
        </div>
    )
}

export default LoginPage