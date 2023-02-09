import express from "express";
import { header } from "express/lib/response";
import shortenLinkController from "../controllers/shortenLinkController";
import cache from "../middlewares/cache.middleware";

const shortenLinkRouter = express.Router();

shortenLinkRouter.get("/:slug", cache, shortenLinkController.redirect);

export default shortenLinkRouter;
