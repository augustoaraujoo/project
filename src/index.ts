import express from "express";
import { postsRoutes } from "./routes/posts.routes";
import { usersRoutes } from "./routes/user.routes";

const app = express();

app.use(express.json());
app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);
export { app };
