import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    header: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        padding: theme.spacing(1, 2),
        borderBottom: `1px solid ${theme.palette.mainFontColor}`,
        paddingLeft: theme.spacing(7),
    },
    title: {
        fontSize: 20,
        fontWeight: 500,
    },
    button: {
        position: 'absolute',
        left: theme.spacing(2),
    }
}));

export default useStyles;