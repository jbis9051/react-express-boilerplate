import * as express from "express";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";
import APIRouter from './routes/API';
import * as path from "path";

const app: express.Application = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname + '/../node_modules/@react-express-boilerplate/frontend/build')));

app.use(['/api', '/api/*'], APIRouter);

app.all(['/', '/*'], ((req, res, next) => {
    res.sendFile(path.resolve(__dirname + '/../node_modules/@react-express-boilerplate/frontend/build/index.html'));
}));

export default app;
