import { createClient } from "redis";

const redis = createClient({
    url: process.env.REDIS_URL,
});

export const connectRedis = async () => {
    try {
        await redis.connect();
    } catch (error) {
        console.log(error);
        // console.log("connect redis fail");
    }
};

export default redis;
