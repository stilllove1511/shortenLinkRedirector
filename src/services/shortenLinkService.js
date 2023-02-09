import mongo from "../mongo/conn";

const findOriginalLink = async (slug) => {
    try {
        let link = await mongo.Link.findOne({
            alias: slug,
        });
        let now = new Date();
        //check if link have not been expired
        if (now < link.expiration) {
            return link;
        } else {
            return null;
        }
    } catch (error) {
        if (error.message !== `Cannot read property 'expiration' of null`)
            console.log(error);
        return null;
    }
};

export default { findOriginalLink };
