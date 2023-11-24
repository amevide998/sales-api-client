import {createTheme} from "@mui/material/styles";

const customTheme = createTheme({
    palette: {
        primary: {
            main: "#ecebe4",
            dark: "#cc998d",
        },
        secondary: {
            main: "#cc998d",
        },
        error: {
            main: "#cc3300",
        },
        warning: {
            main: "#ffcc00"
        },
        info: {
            main: "#429EA6",
        },
        success: {
            main: "#16F4D0",
        }
    },
})

export default customTheme;