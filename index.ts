import express, { Application, Request, Response } from "express";
import cors from 'cors';
const app: Application = express();
const port = process.env.PORT || 8080;

//middleware
//middleware for body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());







//messages after hosting
try {
    app.listen(port, (): void => {
      console.log(`Connected successfully on port ${port}`);
    });
  } catch (error: any) {
    console.error(`Error occured: ${error.message}`);
  }