import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Button,
  Modal,
} from "@material-ui/core";
import "./Todo.css";
import { db } from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import InsertDriveFileRoundedIcon from "@material-ui/icons/InsertDriveFileRounded";
import { grey, red } from "@material-ui/core/colors";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = () => {
    //update todo list with updated value
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h2>Modify a Todo</h2>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            className="updateButton"
            variant="outlined"
            onClick={updateTodo}
          >
            Update Todo
          </Button>
        </div>
      </Modal>
      <div className="singleTodo">
        <List>
          <ListItem>
            <ListItemAvatar>
              <InsertDriveFileRoundedIcon
                fontSize="large"
                style={{ color: grey[500] }}
              />
            </ListItemAvatar>
            <ListItemText primary={props.todo.todo} secondary="Some deadline" />
          </ListItem>
        </List>
        <div>
          <EditIcon
            onClick={(e) => setOpen(true)}
            fontSize="large"
            className="editButton"
          />
          <DeleteForeverIcon
            style={{ color: red[400] }}
            fontSize="large"
            className="deleteButton"
            onClick={(event) =>
              db.collection("todos").doc(props.todo.id).delete()
            }
          />
        </div>
      </div>
    </>
  );
}

export default Todo;
