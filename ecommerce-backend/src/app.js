import express from "express"
import cors from 'cors'
import cookiesParese from 'cookie-parser'

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));


app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({
  extended: true,
  limit: "16kb"
}));

app.use(express.static("public"));
app.use(cookiesParese());

//import 
import userRoleRouter from './routers/userRole.routes.js'
import userrouter from "./routers/user.routes.js";

//router declaration
app.use('/api/v1/userRole', userRoleRouter);
app.use('/api/v1/user',userrouter)


export { app }

