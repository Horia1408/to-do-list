import React, { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const Login = () => {
    return (
        <Box
            component="form"
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
                    id="demo-helper-text-aligned"
                    label="Username"
                    defaultValue=""
                    style={{ width: 425 }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    margin="dense"
                    helperText="Please enter your password"
                    id="utlined-adornment-password"
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
                    type="submit"
                    href="#"
                    fullWidth
                    variant="outlined"
                    sx={{ mt: 1, mb: 1 }}
                    style={{ width: 447 }}
                >
                    Register
                </Button>
            </Grid>

        </Box>
    );
}

//export default Login