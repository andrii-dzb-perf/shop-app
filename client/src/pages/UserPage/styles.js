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
    listItemImg: {
        maxWidth: '100%',
    },
    addProductWrap: {
        marginTop: theme.spacing(4),
    },
    modalForm: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        '&:nth-child(n + 2)': {
            marginTop: theme.spacing(2),
        }
    },
    submitButton: {
        marginTop: theme.spacing(2.5),
        width: 'auto',
        alignSelf: 'flex-end',
    },
}));

export default useStyles;