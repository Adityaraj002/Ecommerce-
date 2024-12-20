import express from "express"
import cors from 'cors'
import cookieParese from 'cookie-parser'

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
app.use(cookieParese());

//import 
import userRoleRouter from './routers/userRole.routes.js' //importing the router
import userrouter from "./routers/user.routes.js";  //importing the router
import ShoppingAddressRouter from "./routers/shoppingAddress.routes.js";  //importing the router

//router declaration
app.use('/api/v1/userRole', userRoleRouter);  //using the router
app.use('/api/v1/user', userrouter)   //using the router
app.use("/api/v1/shoppingAddress", ShoppingAddressRouter);    //using the router


export { app }

