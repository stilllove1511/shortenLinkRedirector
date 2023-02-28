import mongo from "../mongo";

const findOriginalLink = async (slug) => {
    try {
        let now = new Date();
        let link = await mongo.Link.findOne({
            alias: slug,
            expiration: {
                $gt: now,
            },
        });
        //check if link have not been expired
        if (link) {
            return link;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default { findOriginalLink };
