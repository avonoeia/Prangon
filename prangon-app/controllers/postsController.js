const Post = require("../models/postModel");
let upload = require("/home/naveed/Prangon/prangon-app/middlewares/postUploader.js");
const multer = require("multer");
upload = upload.single("post_image_content");

async function createPost(req, res) {
    upload(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(400).json({
                message: err.message,
            });
        } else if (err) {
            return res.status(400).json({
                message: err.message,
            });
        }

        const {
            username,
            author_name,
            post_title,
            post_text_content,
            post_image_content,
            topic,
            likes,
        } = req.body;
    
        try {
            const post = await Post.create({
                username,
                author_name,
                post_title,
                post_text_content,
                post_image_content,
                topic,
                likes,
            });
            
    
            return res.status(201).json(post);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    });
}

module.exports = {
    createPost,
};
