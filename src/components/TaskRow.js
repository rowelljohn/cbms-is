import {connect} from 'react-redux';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { makeStyles } from '@mui/styles';
import { Grid } from "@mui/material";

const useStyles = makeStyles({
    root: {
        minWidth: 150,
        maxWidth: 360
    },
});

const TaskRow = ({ tasks, deleteTask, doneTask}) => {
    const classes = useStyles();
    return(
        <Grid item xs={12} sm={6} md={4} >
            <Card
                className={classes.root}
                style={{
                    backgroundColor: '#ffffcc',
                }}
            >
                <CardContent>
                    <Typography  color="textSecondary"sx={{ fontSize: 18}}>
                        {tasks.name}
                    </Typography>
                    <div style={{
                        display: "flex",
                        justifyContent: "flex-end",
                    }}>
                        {
                            // ternary operation for displaying button
                            tasks.status === 'pending' ?
                                <CardActions>
                                    <CheckCircleOutlineOutlinedIcon onClick={() => doneTask(tasks.id)} style={{cursor:"pointer"}}/>
                                </CardActions>
                                : null
                        }
                        <CardActions>
                            <DeleteOutlinedIcon onClick={() => deleteTask(tasks.id)} style={{ cursor: "pointer" }} />
                        </CardActions>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        deleteTask: (id) => dispatch({type: 'DELETE_TODO_TASK', payload: id}),
        doneTask: (id) => dispatch({type: 'MARK_DONE_TODO_TASK', payload: id})
    }
}

export default connect(null, mapDispatchToProps)(TaskRow);