import React from 'react';
//import from material ui
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        backgroundColor:"#DAF0FD",
        margin: '10px',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: '#afdefe',
        color:'black',
    },
    cardAction: {
        padding:'0 10px',
    }
}))

export default function Con_Res(props) {
    const [expanded, setExpanded] = React.useState(false)
    const classes = useStyles()
    const scoreOutofTotal = `${props.score} / 50`

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }
    const showLevel=(score)=>{
        if (score < 11 ){
            return "very low"
        }
        if(score >= 10 && score <20){
            return "somewhat low"
        }
        if(score >= 30 && score <40){
            return "moderate"
        }
        if(score >= 40){
            return "very high"
        }
    }
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="Emotional Stability" className={classes.avatar}>
                        Em
                    </Avatar>
                }
                title="CONSCIENTIOUSNESS"
                subheader={scoreOutofTotal} 
            />
            <CardActions className={classes.cardAction} disableSpacing>
                <Typography variant="body2" color="textSecondary" component="p">
                    See More Details Below..
                </Typography>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>A score of {props.score} is considered {showLevel(props.score)}</Typography>
                        <Typography paragraph>
                            Emotional Stability is characterized by the tendency to experience unpleasant emotions.
                        </Typography>
                        <Typography paragraph>
                            People who are high in this trait often experience emotional instability and negative emotions. 
                        </Typography>
                        <Typography paragraph>
                            People who are low in agreeableness tend to be calm and deals well with stress.
                        </Typography>
                    </CardContent>
                </Collapse>
        </Card>
    )
}