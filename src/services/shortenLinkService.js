import mongo from '../mongo/conn';

const findOriginLink = async (slug) => {
  try {
    let link = await mongo.Link.findOne({
      alias: slug,
    });
    let now = new Date();
    console.log(link.expiration);
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

export default { findOriginLink };
