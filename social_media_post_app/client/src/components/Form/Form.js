import React, { useState } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

const Form = () => {
  const [postData, setPostData] = useState({
    director: "",
    movie: "",
    description: "",
    genre: "",
    selectedFile: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  //once the user submits we have to send over a post requestwith all the data typed in into the database.
  const handleSubmit = (e) => {
    // e.preventdefault is to not to get refresh on the browser.
    e.preventDefault();
    dispatch(createPost(postData));
  };
  const clear = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        {/* <Typography variant="h6">
          {currentId ? `Editing "${post.movie}"` : "Creating a Memory"}
        </Typography> */}
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
