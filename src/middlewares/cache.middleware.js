import redis from "../redis/index.js";

export const checkCacheLink = async (req, res, next) => {
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
};

export const cacheLink = async (req, res) => {
    redis.set(req.params.slug, req.originalLink);
};
