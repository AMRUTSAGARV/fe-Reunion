// express framework for creating the routing of our application.
import express from "express";
// body-parser  -> enable us to send post request
//momet -> date
//react-file-base -> convert the images
//edux-thunk used for asynchronous actions using redux.
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();

//every route inside of the post routes is going to start with posts
app.use("/posts", postRoutes);

//just setting up the body parser so that we can send post requests.
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//mongoatlas
const CONNECTION_URL =
  "mongodb+srv://SOCIALMEDIA:SOCIALMEDIA@cluster0.csg1hll.mongodb.net/?retryWrites=true&w=majority";
// when we deploy to heroku , heroku is going to populate environmental variable called PORT.
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

//this will make sure that we get no warning in the console.

// mongoose.set("useFindAndModify", false);
