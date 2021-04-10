import React, {useState, useEffect} from 'react'
import TestTakenModel from '../models/TestTaken'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



function AddNameForm (props){
    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState();


    const handleClickOpen = () => {
        setOpen(true);
        console.log("youve opened dialog!")
        console.log(props.id)
        
    };
        
    const handleClose = () => {
        setOpen(false);
    };
    const handleNameSubmit =(event)=>{
        event.preventDefault();
        
        // console.log(name)
        // console.log(event.target[0].value)
        let testid = props.id
        TestTakenModel.update({ name: name }, {testid})
            .then(updatedData => {
                console.log(updatedData,"<=====DATA inside onsubmit takenmodel")
                let allcapsName = name.toUpperCase()
                // alert(`Your name ${allcapsName} has been saved with your results. Thank you for taking our quiz.`)

                // props.history.push(`/`)
            }
        )
    }

    return (
        <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Save Name With Scores
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