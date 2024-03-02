import express from "express";
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDb from "./config/db.js";

//using dotenv variables
dotenv.config();
const port = process.env.PORT || 5000;

// connecting database
connectDb();


const app = express();

//using req.body data and form data
app.use(express.json());
//using form data
app.use(express.urlencoded({ extended: true }));

//using routes
app.use('/api/users', userRoutes);

//adding error middleware
app.use(notFound);
app.use(errorHandler);


app.get('/', (req, res) => {
    res.send('Server is ready')
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})