import { createClient } from "redis";

const redis = createClient();

export const connectRedis = async () => {
    try {
        await redis.connect();
    } catch (error) {
        // console.log(error);
        console.log('connect redis fail')
    }
};

export default redis;
