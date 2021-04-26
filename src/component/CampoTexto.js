import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(3),
        },
    },
}));

export default function Inputs() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Input defaultValue="Holaaa" inputProps={{ 'aria-label': 'description' }} /><br/>
            <Input placeholder="Texto por defecto" inputProps={{ 'aria-label': 'description' }} /> <br/>
            <Input defaultValue="Disabled" disabled inputProps={{ 'aria-label': 'description' }} /> <br/>
            <Input defaultValue="Error" error inputProps={{ 'aria-label': 'description' }} />
        </form>
    );
}
