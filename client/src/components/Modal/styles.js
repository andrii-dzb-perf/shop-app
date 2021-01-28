import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    wrap: {
        display: 'flex',
        justifyContent: 'center',
    }, 
    paper: {
        position: 'absolute',
        width: 500,
        backgroundColor: theme.palette.background.paper,
        border: `2px solid ${theme.palette.mainFontColor}`,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(3, 4),
        outline: 'none',
        marginTop: 200,
    },
    buttons: {
        paddingTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'flex-end',
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
    },
}));

export default useStyles;