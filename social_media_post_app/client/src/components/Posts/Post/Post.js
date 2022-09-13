import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import moment from "moment";
import useStyles from "./styles";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DeleteIcon from "@material-ui/icons/Delete";

const Post = ({ post }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        movie={post.movie}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.director}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={() => {}}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.genre.map((gen) => `#${gen} `)}
        </Typography>
      </div>
      <CardContent>
        <Typography className={classes.movie} variant="h5" gutterBottom>
          {post.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpAltIcon fontSize="small" />
          Like
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <DeleteIcon fontSize="small" />
          Delete
          {post.likeCount}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
