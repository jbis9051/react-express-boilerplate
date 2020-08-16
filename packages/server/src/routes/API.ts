import * as express from "express";
import {Response} from "express";
import {APIResponse} from "@react-express-boilerplate/common";
const router = express.Router();

router.get('/text', ((req, res: Response<APIResponse>, next) => {
    res.json({text: "Hello World from the API!"})
}));

export default router;
