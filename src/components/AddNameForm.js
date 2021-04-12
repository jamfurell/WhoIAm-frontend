import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';

import TestTakenModel from '../models/TestTaken'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles(theme =>({
    saveButton:{
        background: '#4367e8f2',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            margin: '15px 70px'
        },
    },
}))

function AddNameForm (props){
    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState();
    const history = useHistory();
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };
        
    const handleClose = () => {
        setOpen(false);
    };
    const handleNameSubmit =(event)=>{
        event.preventDefault();
        let testid = props.id
        TestTakenModel.update( testid, { name: name })
            .then(updatedData => {
                history.push(`/`)
            }
        )
    }

    return (
        <div>
            <Button className={classes.saveButton} variant="contained" onClick={handleClickOpen}>
                <FavoriteIcon /> Save Name With Scores
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Name</DialogTitle>
                <form onSubmit={handleNameSubmit}> 
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Your Name"
                            type="name"
                            fullWidth
                            onChange={(e) => setName(e.target.value)}
                            />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button type="submit" color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}

export default AddNameForm