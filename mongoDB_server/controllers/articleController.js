const Article = require('../models/articleModel')

const getArticle= (req,res) => {
    let articles=[]
    Article.find().then((article)=> {
        article.forEach((item)=> (articles.push(item)))
        res.status(200).json(articles)
    }).catch(()=>{
        res.status(500).json({error: 'Could not fetch the documents'})
    })
};

const postArticle = async (req,res) => {
    const { title, description, topic,author,userId,minutesToRead } = req.body;
    console.log(req.body)

        // Create a new article object
        const newArticle = new Article({
            title,
            description,
            topic,
            userId,
            author,
            minutesToRead
        });

        // Save the new article to the database
        await newArticle.save();

        // Send a success response
        res.status(201).json({ message: 'Article created successfully', article: newArticle });

}

const deleteArticle = async(req,res) => {
    const articleId = req.query.id
    try {

        // Find the article by ID and delete it
        const deletedArticle = await Article.findByIdAndDelete(articleId);

        if (!deletedArticle) {
            // If the article with the given ID is not found, send a 404 response
            return res.status(404).json({ error: 'Article not found' });
        }

        // Send a success response
        res.status(200).json({ message: 'Article deleted successfully', deletedArticle });
    } catch (err) {
        // If an error occurs, send an error response
        res.status(500).json({ error: 'Could not delete the article', details: err.message });
    }

}

const updateArticle = async (req,res) => {
    const { title, description, topic,minutesToRead, _id } = req.body;

    try
    {   const updatedArticle = await Article.findByIdAndUpdate(
           _id,
           { title, description, topic,minutesToRead, updatedAt: Date.now() },
        { new: true }
        );

        if (!updatedArticle) {
            // If the article with the given ID is not found, send a 404 response
            return res.status(404).json({ error: 'Article not found' });
        }

        // Send a success response
        res.status(200).json({ message: 'Article updated successfully', updatedArticle });
    }
    catch(err) {
        res.status(500).json({ error: 'Could not update the article', details: err.message });

    }
}


module.exports = { getArticle,postArticle,deleteArticle,updateArticle}