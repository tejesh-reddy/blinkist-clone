import { createMuiTheme } from "@material-ui/core";

export const DefaultTheme = createMuiTheme({

    palette: {
        primary: {
            main: '#52d541',
            light: '#4791db',
        },
        secondary: {
            main: "#a7f174",
        },
        info: {
            main: '#a7f174',
        }
    },
    typography: {
        h2: {
            fontSize: '3.5rem',
        },
        h5: {
            fontWeight: 700,
        },
        body1: {
            fontSize: '1.3rem',
            fontWeight: 500,
        }
    },

});