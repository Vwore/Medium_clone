const express = require('express')

const {getArticle, postArticle,deleteArticle, updateArticle} = require('../controllers/articleController')
const router = express.Router()

// get
router.get('/',getArticle) 

// post
router.post('/',postArticle)

router.delete('/',deleteArticle)

router.patch('/',updateArticle)

module.exports = router 