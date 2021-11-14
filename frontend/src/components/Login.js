import React, { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export const Login = () => {
    const [loginOpt, changeLoginOpt] = React.useState(true);

    const [checked, setChecked] = React.useState([true, false]);
    
    const handleChangePublic = (event) => {
        setChecked([event.target.checked, checked[0]]);
    };

    const handleChangePrivate = (event) => {
        setChecked([checked[1], event.target.checked]);
    };

    const handleSubmitRegister = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          username: data.get('username'),
          password: data.get('password'),
          repassword: data.get('repassword'),
          publicState: data.get('publicState'),
          privateState: data.get('privateState'),
        });
    }

    const handleSubmitLogin = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          username: data.get('username'),
          password: data.get('password'),
        });
    }

    if (loginOpt == false){

        return (
            <Box
                component="form"
                onSubmit={handleSubmitRegister}
                sx={{
                    marginTop: 12,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="on"
            >
                <Grid item xs={12} sm={6}>
                    <TextField
                        margin="dense"
                        helperText="Please enter your username"
                        id="username"
                        name="username"
                        label="Username"
                        defaultValue=""
                        style={{ width: 425 }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        margin="dense"
                        helperText="Please enter your password"
                        id="password"
                        name="password"
                        label="Password"
                        defaultValue=""
                        type="password"
                        style={{ width: 425 }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        margin="dense"
                        helperText="Please reenter your password"
                        id="repassword"
                        name="repassword"
                        label="Reenter password"
                        defaultValue=""
                        type="password"
                        style={{ width: 425 }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <Checkbox checked={checked[0]} onChange={handleChangePublic} name="publicState" />
                        }
                        label="Public"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={checked[1]} onChange={handleChangePrivate} name="privateState" />
                        }
                        label="Private"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 1, mb: 1 }}
                        style={{ width: 447 }}
                    >
                        Register
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button
                        onClick={() => changeLoginOpt(true)}
                        fullWidth
                        variant="outlined"
                        sx={{ mt: 1, mb: 1 }}
                        style={{ width: 447 }}
                    >
                        Log In
                    </Button>
                </Grid>
            </Box>
        );
    }
    else
    {
        return (
            <Box
                component="form"
                onSubmit={handleSubmitLogin}
                sx={{
                    marginTop: 12,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="on"
            >
                <Grid item xs={12} sm={6}>
                    <TextField
                        margin="dense"
                        helperText="Please enter your username"
                        id="username"
                        name="username"
                        label="Username"
                        defaultValue=""
                        style={{ width: 425 }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        margin="dense"
                        helperText="Please enter your password"
                        id="password"
                        name="password"
                        label="Password"
                        defaultValue=""
                        type="password"
                        style={{ width: 425 }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 1, mb: 1 }}
                        style={{ width: 447 }}
                    >
                        Log In
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button
                        onClick={() => changeLoginOpt(false)}
                        fullWidth
                        variant="outlined"
                        sx={{ mt: 1, mb: 1 }}
                        style={{ width: 447 }}
                    >
                        Create new account
                    </Button>
                </Grid>
            </Box>
        );
    }
}
export default Login