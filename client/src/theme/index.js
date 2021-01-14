import { createMuiTheme } from "@material-ui/core/styles";
import colors from './colors';

const theme = createMuiTheme({
    palette: {
        mainFontColor: colors.mainFontColor,
    },
    overrides: {
        MuiCssBaseline: {
          '@global': {
            body: {
                color: colors.mainFontColor,
                minHeight: '100vh',
            },
          },
        },
    },
});

export default theme;