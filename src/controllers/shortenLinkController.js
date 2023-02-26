import axios from 'axios';
import shortenLinkService from "../services/shortenLinkService";

const redirect = async (req, res, next) => {
    try {
        let alias = req.params.slug;
        let originalLink = await shortenLinkService.findOriginalLink(alias); //find link
        if (originalLink) {
            res.redirect(originalLink.originalLink); //redirect
            console.log('http://localhost:8080/link/visit/'+originalLink.SQLDBId)
            axios.get('http://localhost:8080/link/visit/'+originalLink.SQLDBId);
            req.originalLink = originalLink;
            // next(); //to cache middleware
        } else {
            return res.send("404 not found"); //if not find link, send 404
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: "error fom server",
            EC: "-1",
            DT: "",
        });
    }
};

export default { redirect };
