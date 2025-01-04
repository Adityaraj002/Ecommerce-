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


import userrouter from "./routers/user.routes.js";  //importing the router
import ShoppingAddressRouter from "./routers/shoppingAddress.routes.js";  //importing the router
import categoriesRouter from "./routers/categories.routes.js";  //importing the router
import ProductRouter from "./routers/product.routes.js";
import ProductVarient from "./routers/productVarient.routes.js";
import comment from "./routers/comments.routes.js";
//router declaration
// app.use('/api/v1/userRole', userRoleRouter);  //using the router
app.use('/api/v1/user', userrouter)   //using the router
app.use("/api/v1/shoppingAddress", ShoppingAddressRouter);  //using the router
app.use("/api/v1/category", categoriesRouter);  //using the router
app.use("/api/v1/products", ProductRouter);  //using the router
app.use("/api/v1/productVarient",ProductVarient);
app.use("/api/v1/comment", comment);
export { app }

