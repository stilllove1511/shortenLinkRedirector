import mongo from "../mongo/conn";

const findOriginalLink = async (slug) => {
    try {
        let link = await mongo.Link.findOne({
            alias: slug,
        });
        let now = new Date();
        if (link.expiration > now) {
            return link.originalLink;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default { findOriginalLink };
