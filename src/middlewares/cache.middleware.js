import redis from "../redis/"
import axios from 'axios';

async function redisGetKey(key,timeout) {
    try {
      return await Promise.race([
        redis.get(key),
        new Promise((resolve, reject) => {
          setTimeout(() => reject('Timeout'), timeout);
        })
      ]);
    } catch (error) {
      console.error(error);
    }
  }

export const checkCacheLink = async (req, res, next) => {
    try {
        let originalLink = await redisGetKey(req.params.slug,100) // check if orginal link has been existed on redis

        if (originalLink) {
            originalLink = JSON.parse(originalLink) // parse link data
            let now = new Date()
            let expiration = new Date(originalLink.expiration)
            //check expired
            if (now < expiration) {
                res.redirect(originalLink.originalLink)
                axios.get(
                    process.env.STORE_SERVICE_VISIT + originalLink.SQLDBId
                );
            } else {
                res.send("404")
            }
        } else {
            next()
        }
    } catch (error) {
        console.log(error)
        next()
    }
}

export const cacheLink = (req, res) => {
    redis.set(
        req.params.slug,
        JSON.stringify(req.originalLink)
    )
}