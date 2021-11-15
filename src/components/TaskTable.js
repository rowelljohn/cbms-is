import TaskRow from "./TaskRow";
import { Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "40px",
        paddingRight: "40px",
    }
});

const TaskTable = (props) => {
    const classes = useStyles();
    return (
        <div >
            <h4>{props.title}</h4>
            <Grid  container
                spacing={2}
                className={classes.gridContainer}
                justifyContent="center">
                    {
                        // pass task to component TaskRow to display
                        props.tasks.map((task, i) => {
                            return <TaskRow tasks={task} key={i}/>
                        })
                    }
            </Grid> 
        </div>
    );
}

export default TaskTable;