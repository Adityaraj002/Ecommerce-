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

//import userRole 
import userRouter from './routers/userRole.routes.js'

//router declaration
app.use('/api/v1', userRouter);

export { app }

// EpxEaVpzplkKztH7