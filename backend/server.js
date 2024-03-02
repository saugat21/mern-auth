import express from "express";
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

//using dotenv variables
dotenv.config();
const port = process.env.PORT || 5000;


const app = express();

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