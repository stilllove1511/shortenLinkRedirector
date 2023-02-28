import { createClient } from "redis";

const redis = createClient({ connect_timeout: 5000});

export const connectRedis = async () => {
    try {
        await redis.connect();
    } catch (error) {
        // console.log(error);
        console.log('connect redis fail')
    }
};

export default redis;
