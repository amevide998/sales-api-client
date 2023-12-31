"use client"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import customTheme from "@/theme/theme";
import {useState} from "react";
import {Alert, CircularProgress, InputAdornment} from "@mui/material";
import {useRouter} from "next/navigation";
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";


function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Sales Api
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function SignInSide() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isButtonDisable, setIsButtonDisable] = useState(false);
    const [errorLogin, setErrorLogin] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false)

    const router = useRouter();


    const Login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setIsButtonDisable(true)
            const res = await fetch(`https://go-gin-on-koyeb-hdscode.koyeb.app/cashier/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "remember-me": rememberMe.toString(),
                },
                body: JSON.stringify({
                    name: username,
                    password: password,
                }),
            })
            const resBody = await res.json()
            if(!res.ok){
                setErrorLogin(resBody.error)
            }else{
                setErrorLogin("")
                sessionStorage.setItem("accessToken", resBody.data.token)
                router.push("/")
            }
            setIsButtonDisable(false)
        }catch (err){
            console.log(err)
            setIsButtonDisable(false)
        }

    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={customTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://res.cloudinary.com/dgcfjbqrl/image/upload/v1700908922/cashier/mhzy2uivw6obyi76a9dg.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            CashierPro
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="name"
                                name="name"
                                autoComplete="name"
                                autoFocus
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                InputProps={{
                                    endAdornment : (
                                        (<InputAdornment position="end"
                                                         suppressHydrationWarning
                                        >
                                            <IconButton
                                                onClick={()=> setShowPassword(!showPassword)}
                                            >
                                                {
                                                    showPassword ? (<Visibility />)
                                                        : (<VisibilityOff/>)
                                                }
                                            </IconButton>
                                        </InputAdornment>)
                                    )
                                }}
                            />

                            <FormControlLabel
                                control={<Checkbox
                                    value={rememberMe}
                                    color="primary"
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />}
                                label="Remember me"
                            />
                            {
                                errorLogin === "" ? "" : (<Alert severity="error">{errorLogin}</Alert>)
                            }
                            {/*@ts-ignore*/}
                            <Button onClick={Login}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    disabled={isButtonDisable}
                            >
                                {
                                    isButtonDisable ? (<CircularProgress />) : " Sign In"
                                }
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link
                                        href="/forgot-password"
                                        variant="body2"
                                        sx={{
                                            color: "secondary.main",
                                        }}
                                    >
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/signup"
                                          variant="body2"
                                          sx={{
                                              color: "secondary.main",
                                          }}
                                    >
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}