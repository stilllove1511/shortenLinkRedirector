import redis from "../redis/index.js";

export default async function cache(req, res, next) {
    try {
        let originalLink = await redis.get(req.params.slug);
        if (originalLink !== null) {
            return res.redirect(originalLink);
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
        next();
    }
}
