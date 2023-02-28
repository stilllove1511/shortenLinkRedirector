import { createClient } from "redis";

const redis = createClient({
    host: process.env.REDIS_HOST||'localhost',
    port: process.env.REDIS_PORT||'6379'
});

export const connectRedis = async () => {
    try {
        await redis.connect();
    } catch (error) {
        // console.log(error);
        console.log("connect redis fail");
    }
};

export default redis;
