import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    wrapper: {
       display: 'flex',
       flexDirection: 'column',
       padding: theme.spacing(1, 3),
    },
    list: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    listItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '30%',
        border: `1px solid ${theme.palette.mainFontColor}`,
        margin: theme.spacing(1),
    },
    listItemTitle: {
        fontWeight: 500,
        fontSize: 16,
    },
    listItemDesc: {

    },
}));

export default useStyles;