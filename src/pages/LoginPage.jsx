import React, {useState} from 'react';
import {FormControl, InputLabel, InputAdornment, OutlinedInput, IconButton, Box} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import PrimaryButton from "../components/buttons/PrimaryButton";

const LoginPage= () => {
    const [showPassword, setShowPassword] = React.useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleClickShowPassword = () => setShowPassword((show) => !show)
    const onLogin= () => {

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
                            placeholder={'Email'}
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