import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    director: "",
    movie: "",
    description: "",
    genre: "",
    selectedFile: "",
  });
  //you want to update. when clicking on the updating 3 dots you want the texts already in the text fileds of the form (you dont want to write them all from the begining right? cuz updating make more sense.)
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  //once the user submits we have to send over a post requestwith all the data typed in into the database.
  const handleSubmit = (e) => {
    // The preventDefault() method cancels the event if it is cancelable,
    // meaning that the default action that belongs to the event will not occur.
    //  For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form.
    e.preventDefault();

    if (currentId) {
      //if current id is not null we have to to updating(update post is possible)
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };
  // clear function is to clear the form after submitting (while editing or posting)
  const clear = () => {
    setCurrentId(0);
    setPostData({
      director: "",
      movie: "",
      description: "",
      genre: "",
      selectedFile: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Creating"} a Movie
        </Typography>
        <TextField
          name="director"
          variant="outlined"
          label="Director"
          fullWidth
          value={postData.director}
          onChange={(e) =>
            setPostData({ ...postData, director: e.target.value })
          }
        />
        <TextField
          name="movie"
          variant="outlined"
          label="Movie"
          fullWidth
          value={postData.movie}
          onChange={(e) => setPostData({ ...postData, movie: e.target.value })}
        />
        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          multiline
          minRows={4}
          value={postData.description}
          onChange={(e) =>
            setPostData({ ...postData, description: e.target.value })
          }
        />
        <TextField
          name="genre"
          variant="outlined"
          label="Genre (coma separated)"
          fullWidth
          value={postData.genre}
          onChange={(e) =>
            setPostData({ ...postData, genre: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
