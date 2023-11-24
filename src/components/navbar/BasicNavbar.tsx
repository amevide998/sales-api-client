"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import customTheme from "@/theme/theme";
import {ThemeProvider} from "@mui/material/styles";

export default function ButtonAppBar() {
    return (
        <ThemeProvider theme={customTheme}>
            <Box
                sx={{flexGrow: 1}}
            >
                <AppBar position="static" >
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 , '&:hover' : {
                                    color: 'secondary.main'
                                }
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Cashier
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}